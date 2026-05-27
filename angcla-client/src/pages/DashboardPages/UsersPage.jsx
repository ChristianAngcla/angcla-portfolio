import { useState, useEffect } from 'react';
import {
  Alert,
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControlLabel,
  IconButton,
  InputAdornment,
  MenuItem,
  Stack,
  Switch,
  TextField,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { DataGrid } from '@mui/x-data-grid';
import { useNavigate } from 'react-router-dom';
import { cohesiveCardStyle } from './DashboardPage';
import { fetchUsers, createUser, updateUser } from '../../services/userService';

const userTypes = ['admin', 'editor', 'viewer'];
const genders = ['male', 'female', 'other'];

const blankForm = {
  firstName: '',
  lastName: '',
  age: '',
  gender: '',
  contactNumber: '',
  email: '',
  type: 'editor',
  username: '',
  password: '',
  address: '',
  isActive: true,
};

const labelize = (value) =>
  value ? `${value.charAt(0).toUpperCase()}${value.slice(1)}` : '';

const UsersPage = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modal, setModal] = useState({ open: false, id: null });
  const [form, setForm] = useState(blankForm);
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [apiError, setApiError] = useState('');

  // /* --- ENHANCEMENT 2: Search and Filter State --- */
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');
  const [filterGender, setFilterGender] = useState('all');
  const [filterStatus, setFilterStatus] = useState('all');
  // /* ---------------------------------------------- */

  const loadUsers = async () => {
    try {
      setLoading(true);
      const { data } = await fetchUsers();
      setUsers(data.users || []);
    } catch (error) {
      console.error('Error fetching users:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (localStorage.getItem('type') !== 'admin') {
      navigate('/dashboard', { replace: true });
    } else {
      loadUsers();
    }
  }, []);

  const resetForm = () => {
    setForm({ ...blankForm });
    setErrors({});
  };

  const openModal = (user) => {
    setApiError('');
    setModal({ open: true, id: user?._id ?? null });
    setForm(user ? { ...blankForm, ...user, password: '' } : { ...blankForm });
    setErrors({});
  };

  const closeModal = () => {
    setModal({ open: false, id: null });
    setShowPassword(false);
    resetForm();
  };

  const handleChange = ({ target: { name, value, checked, type } }) => {
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const nextErrors = {};
    const email = form.email.trim().toLowerCase();
    const username = form.username.trim().toLowerCase();

    [
      ['firstName', 'First name'],
      ['lastName', 'Last name'],
      ['age', 'Age'],
      ['gender', 'Gender'],
      ['contactNumber', 'Contact number'],
      ['email', 'Email'],
      ['type', 'Type'],
      ['username', 'Username'],
      ['password', 'Password'],
      ['address', 'Address'],
    ].forEach(([key, label]) => {
      if (!String(form[key]).trim()) {
        nextErrors[key] = `${label} is required.`;
      }
    });

    if (!modal.id && !String(form.password).trim()) {
      nextErrors.password = 'Password is required.';
    }

    if (!nextErrors.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      nextErrors.email = 'Enter a valid email address.';
    }

    if (!nextErrors.email && users.some((user) => user._id !== modal.id && user.email === email)) {
      nextErrors.email = 'Email address already exists.';
    }

    if (!nextErrors.username && users.some((user) => user._id !== modal.id && user.username === username)) {
      nextErrors.username = 'Username already exists.';
    }

    // /* --- ENHANCEMENT 3: Improved Form Validation --- */
    if (!nextErrors.password && form.password && form.password.length < 8) {
      nextErrors.password = 'Password must be at least 8 characters long.';
    }
    if (!nextErrors.contactNumber && !/^\d{11}$/.test(form.contactNumber.trim())) {
      nextErrors.contactNumber = 'Contact number must be exactly 11 digits.';
    }
    if (!nextErrors.age) {
      const ageNum = Number(form.age.trim());
      if (!/^\d+$/.test(form.age.trim())) {
        nextErrors.age = 'Age must be a number only.';
      } else if (ageNum < 18 || ageNum > 100) { 
        // The 5th beginner-friendly rule
        nextErrors.age = 'Age must be between 18 and 100.';
      }
    }
    if (!nextErrors.username && /\s/.test(form.username.trim())) {
      nextErrors.username = 'Username must not contain any spaces.';
    }
    // /* ----------------------------------------------- */

    return nextErrors;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setApiError('');
    const nextErrors = validate();

    if (Object.keys(nextErrors).length) {
      setErrors(nextErrors);
      return;
    }

    const nextUser = {
      firstName: form.firstName.trim(),
      lastName: form.lastName.trim(),
      age: form.age.trim(),
      gender: form.gender.trim().toLowerCase(),
      contactNumber: form.contactNumber.trim(),
      email: form.email.trim().toLowerCase(),
      type: form.type.trim().toLowerCase(),
      username: form.username.trim().toLowerCase(),
      password: form.password,
      address: form.address.trim(),
      isActive: form.isActive,
    };

    if (!nextUser.password) {
      delete nextUser.password;
    }

    try {
      if (modal.id) {
        await updateUser(modal.id, nextUser);
      } else {
        await createUser(nextUser);
      }
      loadUsers();
      closeModal();
    } catch (error) {
      setApiError(error.response?.data?.message || 'Failed to save user. Please try again.');
      console.error('Error saving user:', error);
    }
  };

  const toggleStatus = async (id, currentStatus) => {
    try {
      await updateUser(id, { isActive: !currentStatus });
      loadUsers();
    } catch (error) {
      console.error('Error toggling status:', error);
    }
  };

  // /* --- ENHANCEMENT 2: Search and Filter Logic --- */
  const filteredUsers = users.filter((user) => {
    const matchesSearch = 
      searchTerm === '' || 
      (user.firstName || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
      (user.lastName || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
      (user.email || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
      (user.username || '').toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesType = filterType === 'all' || user.type === filterType;
    const matchesGender = filterGender === 'all' || user.gender === filterGender;
    const matchesStatus = filterStatus === 'all' || 
      (filterStatus === 'active' && user.isActive) || 
      (filterStatus === 'inactive' && !user.isActive);

    return matchesSearch && matchesType && matchesGender && matchesStatus;
  });
  // /* ---------------------------------------------- */

  const fieldProps = (name, label, extra = {}) => ({
    name,
    label,
    value: form[name],
    onChange: handleChange,
    error: Boolean(errors[name]),
    helperText: errors[name],
    fullWidth: true,
    ...extra,
  });

  const columns = [
    { field: '_id', headerName: 'ID', width: 90 },
    {
      field: 'fullName',
      headerName: 'Full Name',
      flex: 1,
      minWidth: 130,
      valueGetter: (_, row) => `${row.firstName || ''} ${row.lastName || ''}`.trim(),
    },
    { field: 'username', headerName: 'Username', flex: 1, minWidth: 110 },
    { field: 'age', headerName: 'Age', width: 60 },
    {
      field: 'gender',
      headerName: 'Gender',
      width: 80,
      valueGetter: (_, row) => labelize(row.gender),
    },
    { field: 'contactNumber', headerName: 'Contact', width: 120 },
    {
      field: 'email',
      headerName: 'Email',
      flex: 1.5,
      minWidth: 160,
    },
    {
      field: 'type',
      headerName: 'Type',
      width: 80,
      valueGetter: (_, row) => labelize(row.type),
    },
    {
      field: 'status',
      headerName: 'Status',
      width: 100,
      sortable: false,
      renderCell: ({ row }) => (
        <Chip
          size="small"
          label={row.isActive ? 'Active' : 'Inactive'}
          color={row.isActive ? 'success' : 'default'}
          variant={row.isActive ? 'filled' : 'outlined'}
        />
      ),
    },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 175,
      sortable: false,
      filterable: false,
      renderCell: ({ row }) => (
        <Stack direction="row" spacing={1} sx={{ py: 0.5 }}>
          <Button size="small" variant="outlined" onClick={() => openModal(row)}>
            Edit
          </Button>
          <Button
            size="small"
            variant="contained"
            color={row.isActive ? 'warning' : 'success'}
            onClick={() => toggleStatus(row._id, row.isActive)}
          >
            {row.isActive ? 'Disable' : 'Activate'}
          </Button>
        </Stack>
      ),
    },
  ];

  return (
    <Box sx={{ width: '100%', minWidth: 0, maxWidth: '1200px', mx: 'auto' }}>
      <Stack
        direction={{ xs: "column", md: "row" }}
        justifyContent="space-between"
        alignItems={{ xs: "flex-start", md: "center" }}
        spacing={2}
        sx={{ mb: 4 }}
      >
        <Box>
          <Typography variant="body2" sx={{ fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.28em', color: '#a78bfa', mb: 1 }}>
            User Management
          </Typography>
          <Typography variant="h4" sx={{ fontWeight: 900, color: '#0c4a6e' }}>
            Users Directory
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mt: 1 }}>
            Manage system access, edit user details, and control account statuses.
          </Typography>
        </Box>
      </Stack>

      {/* /* --- ENHANCEMENT 2: Search and Filter UI --- */ }
      <Card sx={{ ...cohesiveCardStyle, mb: 4 }}>
        <CardContent sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, p: 2, pb: '16px !important' }}>
          <TextField
            label="Search by Name, Email, or Username..."
            variant="outlined"
            size="small"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            sx={{ flex: { xs: '1 1 100%', md: '1 1 auto' }, minWidth: '250px' }}
          />
          <TextField
            select
            label="Type"
            size="small"
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
            sx={{ minWidth: { xs: '100%', sm: 120 } }}
          >
            <MenuItem value="all">All Types</MenuItem>
            {userTypes.map((t) => <MenuItem key={t} value={t}>{labelize(t)}</MenuItem>)}
          </TextField>
          <TextField
            select
            label="Gender"
            size="small"
            value={filterGender}
            onChange={(e) => setFilterGender(e.target.value)}
            sx={{ minWidth: { xs: '100%', sm: 120 } }}
          >
            <MenuItem value="all">All Genders</MenuItem>
            {genders.map((g) => <MenuItem key={g} value={g}>{labelize(g)}</MenuItem>)}
          </TextField>
          <TextField
            select
            label="Status"
            size="small"
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            sx={{ minWidth: { xs: '100%', sm: 120 } }}
          >
            <MenuItem value="all">All Statuses</MenuItem>
            <MenuItem value="active">Active</MenuItem>
            <MenuItem value="inactive">Inactive</MenuItem>
          </TextField>
        </CardContent>
      </Card>
      { /* --------------------------------------------- */ }

      <Card sx={{ ...cohesiveCardStyle, minWidth: 0, overflow: 'hidden' }}>
        <CardContent sx={{ p: { xs: 2, sm: 3 }, pb: '16px !important' }}>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: 2, mb: 3 }}>
            <Typography variant="h6" sx={{ color: '#0c4a6e', fontWeight: 'bold' }}>
              User Records
            </Typography>
            <Button
              variant="contained"
              startIcon={<PersonAddIcon />}
              onClick={() => openModal()}
              sx={{ 
                bgcolor: '#0c4a6e', 
                color: 'white',
                '&:hover': { bgcolor: '#072f47', transform: 'translateY(-2px)', boxShadow: 4 }, 
                ml: 'auto',
                borderRadius: '2rem',
                textTransform: 'none',
                fontWeight: 'bold',
                px: 3,
                py: 1,
                transition: 'all 0.2s ease-in-out',
                boxShadow: 2
              }}
            >
              Add New User
            </Button>
          </Box>
          {filteredUsers.length ? (
            <Box sx={{ height: { xs: 460, sm: 520 }, width: '100%', minWidth: 0 }}>
              <DataGrid
              rows={filteredUsers}
              columns={columns}
              getRowId={(row) => row._id}
              loading={loading}
              disableRowSelectionOnClick
              pageSizeOptions={[5, 10]}
              initialState={{
                pagination: { paginationModel: { pageSize: 5, page: 0 } },
              }}
              sx={{
                minWidth: 0,
                '& .MuiDataGrid-cell, & .MuiDataGrid-columnHeader': {
                  outline: 'none',
                },
              }}
            />
            </Box>
          ) : (
            <Alert severity="info">
              No users found matching your search and filter criteria.
            </Alert>
          )}
        </CardContent>
      </Card>

      <Dialog
        open={modal.open}
        onClose={closeModal}
        fullWidth
        fullScreen={isMobile}
        maxWidth="md"
      >
        <Box component="form" onSubmit={handleSubmit}>
          <DialogTitle>{modal.id ? 'Edit User' : 'Add User'}</DialogTitle>
          <DialogContent dividers sx={{ px: { xs: 2, sm: 3 } }}>
            <Stack spacing={2} sx={{ pt: 1 }}>
              {apiError && (
                <Alert severity="error" sx={{ mb: 1 }}>
                  {apiError}
                </Alert>
              )}
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                <TextField {...fieldProps('firstName', 'First Name')} />
                <TextField {...fieldProps('lastName', 'Last Name')} />
              </Stack>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                <TextField {...fieldProps('age', 'Age')} />
                {/* --- ENHANCEMENT 3: Fix MUI Out-of-Range Console Warning --- */}
                {/* Added SelectProps={{ displayEmpty: true }} and a hidden empty MenuItem to handle blank initial state */}
                <TextField {...fieldProps('gender', 'Gender', { select: true, SelectProps: { displayEmpty: true } })}>
                  <MenuItem value="" disabled sx={{ display: 'none' }}></MenuItem>
                  {/* ----------------------------------------------------------- */}
                  {genders.map((gender) => (
                    <MenuItem key={gender} value={gender}>
                      {labelize(gender)}
                    </MenuItem>
                  ))}
                </TextField>
              </Stack>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                <TextField {...fieldProps('contactNumber', 'Contact Number')} />
                <TextField {...fieldProps('email', 'Email Address', { type: 'email' })} />
              </Stack>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                <TextField {...fieldProps('type', 'Type', { select: true })}>
                  {userTypes.map((type) => (
                    <MenuItem key={type} value={type}>
                      {labelize(type)}
                    </MenuItem>
                  ))}
                </TextField>
                <TextField {...fieldProps('username', 'Username')} />
              </Stack>
              <TextField
                {...fieldProps('password', 'Password', {
                  type: showPassword ? 'text' : 'password',
                  slotProps: {
                    input: {
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            edge="end"
                            onClick={() => setShowPassword((prev) => !prev)}
                            onMouseDown={(event) => event.preventDefault()}
                            aria-label={showPassword ? 'Hide password' : 'Show password'}
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    },
                  },
                })}
              />
              <TextField {...fieldProps('address', 'Address', { multiline: true, rows: 3 })} />
              <FormControlLabel
                control={
                  <Switch
                    name="isActive"
                    checked={form.isActive}
                    onChange={handleChange}
                  />
                }
                label={form.isActive ? 'User status: Active' : 'User status: Inactive'}
              />
            </Stack>
          </DialogContent>
          <DialogActions sx={{ px: 3, py: 2 }}>
            <Button onClick={closeModal}>Cancel</Button>
            <Button type="submit" variant="contained">
              {modal.id ? 'Update User' : 'Save User'}
            </Button>
          </DialogActions>
        </Box>
      </Dialog>
    </Box>
  );
};

export default UsersPage;