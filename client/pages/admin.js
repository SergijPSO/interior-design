import { useState, useEffect } from 'react';
import Head from 'next/head';

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [loginLoading, setLoginLoading] = useState(false);

  // Password recovery states
  const [authView, setAuthView] = useState('login'); // 'login', 'forgot', 'reset'
  const [recoveryEmail, setRecoveryEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [recoveryMessage, setRecoveryMessage] = useState({ text: '', type: '' });
  const [recoveryLoading, setRecoveryLoading] = useState(false);

  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState({ text: '', type: '' });

  // Form state for creating/editing projects
  const [isEditing, setIsEditing] = useState(false);
  const [currentId, setCurrentId] = useState('');
  const [formData, setFormData] = useState({
    id: '',
    description: '',
    area: '',
    visualisation: '',
    realization: '',
  });

  // Price form state
  const [priceData, setPriceData] = useState({
    designProject: '20 $ кв.м.',
    technicalProject: '10 $ кв.м.',
    authorSupervision: 'від 250$ в міс.',
  });
  const [priceMessage, setPriceMessage] = useState({ text: '', type: '' });

  useEffect(() => {
    const token = localStorage.getItem('arina_admin_token');
    if (token) {
      setIsAuthenticated(true);
      fetchProjects();
      fetchPrices();
    } else {
      setLoading(false);
    }
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoginError('');
    setLoginLoading(true);

    try {
      const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5001';
      const res = await fetch(`${API_URL}/api/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        localStorage.setItem('arina_admin_token', data.token);
        setIsAuthenticated(true);
        fetchProjects();
        fetchPrices();
      } else {
        setLoginError(data.message || 'Невірний логін або пароль');
      }
    } catch (err) {
      console.error('Login error:', err);
      setLoginError('Помилка підключення до сервера');
    } finally {
      setLoginLoading(false);
    }
  };

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    setRecoveryMessage({ text: '', type: '' });
    setRecoveryLoading(true);

    try {
      const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5001';
      const res = await fetch(`${API_URL}/api/auth/forgot-password`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: recoveryEmail }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setAuthView('reset');
        setRecoveryMessage({ text: data.message, type: 'success' });
      } else {
        setRecoveryMessage({ text: data.message || 'Помилка перевірки email', type: 'error' });
      }
    } catch (err) {
      console.error('Forgot password error:', err);
      setRecoveryMessage({ text: 'Помилка підключення до сервера', type: 'error' });
    } finally {
      setRecoveryLoading(false);
    }
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    setRecoveryMessage({ text: '', type: '' });
    setRecoveryLoading(true);

    try {
      const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5001';
      const res = await fetch(`${API_URL}/api/auth/reset-password`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: recoveryEmail, newPassword }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setRecoveryMessage({ text: data.message, type: 'success' });
        setTimeout(() => {
          setAuthView('login');
          setLoginError('');
          setRecoveryMessage({ text: '', type: '' });
          setPassword('');
        }, 2500);
      } else {
        setRecoveryMessage({ text: data.message || 'Помилка оновлення пароля', type: 'error' });
      }
    } catch (err) {
      console.error('Reset password error:', err);
      setRecoveryMessage({ text: 'Помилка підключення до сервера', type: 'error' });
    } finally {
      setRecoveryLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('arina_admin_token');
    setIsAuthenticated(false);
    setUsername('');
    setPassword('');
  };

  const fetchProjects = async () => {
    setLoading(true);
    try {
      const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5001';
      const res = await fetch(`${API_URL}/api/projects`);
      const data = await res.json();
      if (data && Array.isArray(data.projects)) {
        setProjects(data.projects);
      } else if (Array.isArray(data)) {
        setProjects(data);
      }
    } catch (err) {
      console.error('Error fetching projects:', err);
      setMessage({ text: 'Помилка завантаження проєктів', type: 'error' });
    } finally {
      setLoading(false);
    }
  };

  const fetchPrices = async () => {
    try {
      const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5001';
      const res = await fetch(`${API_URL}/api/prices`);
      const data = await res.json();
      if (data) {
        setPriceData({
          designProject: data.designProject || '20 $ кв.м.',
          technicalProject: data.technicalProject || '10 $ кв.м.',
          authorSupervision: data.authorSupervision || 'від 250$ в міс.',
        });
      }
    } catch (err) {
      console.error('Error fetching prices:', err);
    }
  };

  const handlePriceSubmit = async (e) => {
    e.preventDefault();
    setPriceMessage({ text: '', type: '' });

    try {
      const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5001';
      const res = await fetch(`${API_URL}/api/prices`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(priceData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setPriceMessage({ text: 'Ціни успішно оновлено!', type: 'success' });
      } else {
        setPriceMessage({ text: data.message || 'Помилка збереження цін', type: 'error' });
      }
    } catch (err) {
      console.error('Price update error:', err);
      setPriceMessage({ text: 'Помилка з\'єднання з сервером', type: 'error' });
    }
  };

  const handleOpenCreate = () => {
    setIsEditing(false);
    setCurrentId('');
    setFormData({
      id: `project${Date.now()}`,
      description: '',
      area: '',
      visualisation: '',
      realization: '',
    });
  };

  const handleOpenEdit = (project) => {
    setIsEditing(true);
    setCurrentId(project.id);
    setFormData({
      id: project.id,
      description: project.description || '',
      area: project.area || '',
      visualisation: Array.isArray(project.visualisation) ? project.visualisation.join(', ') : '',
      realization: Array.isArray(project.realization) ? project.realization.join(', ') : '',
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage({ text: '', type: '' });

    const payload = {
      id: formData.id,
      description: formData.description,
      area: formData.area,
      visualisation: formData.visualisation.split(',').map(s => s.trim()).filter(Boolean),
      realization: formData.realization.split(',').map(s => s.trim()).filter(Boolean),
    };

    try {
      const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5001';
      const url = isEditing
        ? `${API_URL}/api/projects/${currentId}`
        : `${API_URL}/api/projects`;
      const method = isEditing ? 'PUT' : 'POST';

      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setMessage({
          text: isEditing ? 'Проєкт успішно оновлено!' : 'Проєкт успішно створено!',
          type: 'success',
        });
        fetchProjects();
        if (!isEditing) handleOpenCreate();
      } else {
        setMessage({ text: data.message || 'Помилка збереження', type: 'error' });
      }
    } catch (err) {
      console.error('Submit error:', err);
      setMessage({ text: 'Помилка з\'єднання з сервером', type: 'error' });
    }
  };

  const handleDelete = async (id) => {
    if (!confirm(`Ви дійсно хочете видалити проєкт ${id}?`)) return;

    try {
      const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5001';
      const res = await fetch(`${API_URL}/api/projects/${id}`, {
        method: 'DELETE',
      });
      const data = await res.json();

      if (res.ok && data.success) {
        setMessage({ text: 'Проєкт видалено', type: 'success' });
        fetchProjects();
      } else {
        setMessage({ text: data.message || 'Помилка видалення', type: 'error' });
      }
    } catch (err) {
      console.error('Delete error:', err);
      setMessage({ text: 'Помилка з\'єднання з сервером', type: 'error' });
    }
  };

  if (!isAuthenticated) {
    return (
      <>
        <Head>
          <title>Вхід в Адмін-панель | Аріна Козловська</title>
        </Head>
        <div style={styles.loginContainer}>
          {authView === 'login' && (
            <div style={styles.loginCard}>
              <h1 style={styles.loginTitle}>Адмін-панель</h1>
              <p style={styles.loginSubtitle}>Введіть облікові дані для входу</p>

              {loginError && <div style={styles.error}>{loginError}</div>}
              {recoveryMessage.text && (
                <div style={{ ...styles.alert, ...(recoveryMessage.type === 'error' ? styles.alertError : styles.alertSuccess) }}>
                  {recoveryMessage.text}
                </div>
              )}

              <form onSubmit={handleLogin} style={styles.form}>
                <div style={styles.inputGroup}>
                  <label style={styles.label}>Логін</label>
                  <input
                    type='text'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    style={styles.input}
                    placeholder='Arina-admin'
                    required
                  />
                </div>

                <div style={styles.inputGroup}>
                  <label style={styles.label}>Пароль</label>
                  <input
                    type='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    style={styles.input}
                    placeholder='Пароль'
                    required
                  />
                </div>

                <button type='submit' style={styles.primaryBtn} disabled={loginLoading}>
                  {loginLoading ? 'Вхід...' : 'Увійти'}
                </button>
              </form>

              <div style={{ marginTop: '16px', textAlign: 'center' }}>
                <button
                  type='button'
                  onClick={() => { setAuthView('forgot'); setRecoveryMessage({ text: '', type: '' }); setRecoveryEmail('arinakozlovska@gmail.com'); }}
                  style={{ background: 'none', border: 'none', color: colors.swampy, cursor: 'pointer', fontSize: '13px', fontWeight: '600' }}
                >
                  Забули пароль?
                </button>
              </div>

              <div style={styles.backLink}>
                <a href='/' style={styles.link}>← На головний сайт</a>
              </div>
            </div>
          )}

          {authView === 'forgot' && (
            <div style={styles.loginCard}>
              <h1 style={styles.loginTitle}>Відновлення пароля</h1>
              <p style={styles.loginSubtitle}>Введіть пошту адміністратора (arinakozlovska@gmail.com)</p>

              {recoveryMessage.text && (
                <div style={{ ...styles.alert, ...(recoveryMessage.type === 'error' ? styles.alertError : styles.alertSuccess) }}>
                  {recoveryMessage.text}
                </div>
              )}

              <form onSubmit={handleForgotPassword} style={styles.form}>
                <div style={styles.inputGroup}>
                  <label style={styles.label}>Email</label>
                  <input
                    type='email'
                    value={recoveryEmail}
                    onChange={(e) => setRecoveryEmail(e.target.value)}
                    style={styles.input}
                    placeholder='arinakozlovska@gmail.com'
                    required
                  />
                </div>

                <button type='submit' style={styles.primaryBtn} disabled={recoveryLoading}>
                  {recoveryLoading ? 'Перевірка...' : 'Підтвердити email'}
                </button>
              </form>

              <div style={styles.backLink}>
                <button
                  type='button'
                  onClick={() => { setAuthView('login'); setRecoveryMessage({ text: '', type: '' }); }}
                  style={{ background: 'none', border: 'none', color: colors.swampy, cursor: 'pointer', fontSize: '14px', fontWeight: '600' }}
                >
                  ← Повернутися до входу
                </button>
              </div>
            </div>
          )}

          {authView === 'reset' && (
            <div style={styles.loginCard}>
              <h1 style={styles.loginTitle}>Новий пароль</h1>
              <p style={styles.loginSubtitle}>Введіть новий пароль для Arina-admin</p>

              {recoveryMessage.text && (
                <div style={{ ...styles.alert, ...(recoveryMessage.type === 'error' ? styles.alertError : styles.alertSuccess) }}>
                  {recoveryMessage.text}
                </div>
              )}

              <form onSubmit={handleResetPassword} style={styles.form}>
                <div style={styles.inputGroup}>
                  <label style={styles.label}>Новий пароль</label>
                  <input
                    type='password'
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    style={styles.input}
                    placeholder='Введіть новий пароль'
                    required
                  />
                </div>

                <button type='submit' style={styles.primaryBtn} disabled={recoveryLoading}>
                  {recoveryLoading ? 'Збереження...' : 'Зберегти новий пароль'}
                </button>
              </form>

              <div style={styles.backLink}>
                <button
                  type='button'
                  onClick={() => { setAuthView('login'); setRecoveryMessage({ text: '', type: '' }); }}
                  style={{ background: 'none', border: 'none', color: colors.swampy, cursor: 'pointer', fontSize: '14px', fontWeight: '600' }}
                >
                  ← Повернутися до входу
                </button>
              </div>
            </div>
          )}
        </div>
      </>
    );
  }

  return (
    <>
      <Head>
        <title>Адмін-панель | Аріна Козловська</title>
      </Head>
      <div style={styles.container}>
        <header style={styles.header}>
          <div style={styles.headerLeft}>
            <h1 style={styles.headerTitle}>Керування проєктами та цінами</h1>
            <span style={styles.userBadge}>Arina-admin</span>
          </div>
          <div style={styles.headerRight}>
            <a href='/' target='_blank' style={styles.siteLink}>Переглянути сайт ↗</a>
            <button onClick={handleLogout} style={styles.logoutBtn}>Вийти</button>
          </div>
        </header>

        <main style={styles.main}>
          {message.text && (
            <div style={{ ...styles.alert, ...(message.type === 'error' ? styles.alertError : styles.alertSuccess) }}>
              {message.text}
            </div>
          )}

          {/* Prices Management Section */}
          <div style={{ ...styles.card, marginBottom: '30px' }}>
            <h2 style={styles.cardTitle}>Редагування вартості послуг</h2>
            {priceMessage.text && (
              <div style={{ ...styles.alert, ...(priceMessage.type === 'error' ? styles.alertError : styles.alertSuccess) }}>
                {priceMessage.text}
              </div>
            )}
            <form onSubmit={handlePriceSubmit} style={styles.priceFormGrid}>
              <div style={styles.inputGroup}>
                <label style={styles.label}>Дизайн проєкт (напр. 20 $ кв.м.)</label>
                <input
                  type='text'
                  value={priceData.designProject}
                  onChange={(e) => setPriceData({ ...priceData, designProject: e.target.value })}
                  style={styles.input}
                  required
                />
              </div>

              <div style={styles.inputGroup}>
                <label style={styles.label}>Технічний проєкт (напр. 10 $ кв.м.)</label>
                <input
                  type='text'
                  value={priceData.technicalProject}
                  onChange={(e) => setPriceData({ ...priceData, technicalProject: e.target.value })}
                  style={styles.input}
                  required
                />
              </div>

              <div style={styles.inputGroup}>
                <label style={styles.label}>Авторський нагляд (напр. від 250$ в міс.)</label>
                <input
                  type='text'
                  value={priceData.authorSupervision}
                  onChange={(e) => setPriceData({ ...priceData, authorSupervision: e.target.value })}
                  style={styles.input}
                  required
                />
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-end' }}>
                <button type='submit' style={styles.primaryBtn}>
                  Зберегти ціни
                </button>
              </div>
            </form>
          </div>

          <div style={styles.grid}>
            {/* Form Section for Projects */}
            <div style={styles.card}>
              <h2 style={styles.cardTitle}>
                {isEditing ? `Редагувати проєкт: ${currentId}` : 'Додати новий проєкт'}
              </h2>
              <form onSubmit={handleSubmit} style={styles.form}>
                <div style={styles.inputGroup}>
                  <label style={styles.label}>ID проєкту (напр. project9)</label>
                  <input
                    type='text'
                    value={formData.id}
                    onChange={(e) => setFormData({ ...formData, id: e.target.value })}
                    style={styles.input}
                    required
                    disabled={isEditing}
                  />
                </div>

                <div style={styles.inputGroup}>
                  <label style={styles.label}>Опис об'єкта</label>
                  <input
                    type='text'
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    style={styles.input}
                    placeholder='Напр. Квартира в ЖК Новопечерські Липки'
                    required
                  />
                </div>

                <div style={styles.inputGroup}>
                  <label style={styles.label}>Площа</label>
                  <input
                    type='text'
                    value={formData.area}
                    onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                    style={styles.input}
                    placeholder='Напр. 120 м²'
                    required
                  />
                </div>

                <div style={styles.inputGroup}>
                  <label style={styles.label}>Візуалізації (шляхи через кому)</label>
                  <textarea
                    value={formData.visualisation}
                    onChange={(e) => setFormData({ ...formData, visualisation: e.target.value })}
                    style={{ ...styles.input, height: '70px', resize: 'vertical' }}
                    placeholder='/assets/images/designs/project1/visualisation/1.jpg, ...'
                  />
                </div>

                <div style={styles.inputGroup}>
                  <label style={styles.label}>Реалізація (шляхи через кому)</label>
                  <textarea
                    value={formData.realization}
                    onChange={(e) => setFormData({ ...formData, realization: e.target.value })}
                    style={{ ...styles.input, height: '70px', resize: 'vertical' }}
                    placeholder='/assets/images/designs/project1/realization/1.jpg, ...'
                  />
                </div>

                <div style={styles.buttonRow}>
                  <button type='submit' style={styles.primaryBtn}>
                    {isEditing ? 'Зберегти зміни' : 'Створити проєкт'}
                  </button>
                  {isEditing && (
                    <button type='button' onClick={handleOpenCreate} style={styles.cancelBtn}>
                      Скасувати
                    </button>
                  )}
                </div>
              </form>
            </div>

            {/* Projects List Section */}
            <div style={styles.card}>
              <h2 style={styles.cardTitle}>Список проєктів ({projects.length})</h2>
              {loading ? (
                <p style={styles.loadingText}>Завантаження...</p>
              ) : projects.length === 0 ? (
                <p style={styles.loadingText}>Проєктів поки немає.</p>
              ) : (
                <div style={styles.projectList}>
                  {projects.map((p) => (
                    <div key={p.id} style={styles.projectItem}>
                      <div>
                        <strong style={{ color: '#271F18' }}>{p.id}</strong> — {p.description} ({p.area})
                      </div>
                      <div style={styles.itemActions}>
                        <button onClick={() => handleOpenEdit(p)} style={styles.editBtn}>Редагувати</button>
                        <button onClick={() => handleDelete(p.id)} style={styles.deleteBtn}>Видалити</button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

// Landing page color variables
const colors = {
  beige: '#ECEBE8',
  white: '#EBEAE5',
  sandy: '#D9D0BD',
  swampy: '#7D8F74',
  brown: '#271F18',
  gray: '#C2C2C2',
};

const styles = {
  loginContainer: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.beige,
    fontFamily: 'Manrope, sans-serif',
    padding: '20px',
  },
  loginCard: {
    backgroundColor: colors.white,
    padding: '40px',
    borderRadius: '12px',
    boxShadow: '0 8px 30px rgba(39, 31, 24, 0.1)',
    width: '100%',
    maxWidth: '420px',
    border: `1px solid ${colors.sandy}`,
  },
  loginTitle: {
    color: colors.brown,
    fontSize: '26px',
    marginBottom: '8px',
    textAlign: 'center',
    fontWeight: '700',
  },
  loginSubtitle: {
    color: '#666',
    fontSize: '14px',
    marginBottom: '24px',
    textAlign: 'center',
  },
  container: {
    minHeight: '100vh',
    backgroundColor: colors.beige,
    color: colors.brown,
    fontFamily: 'Manrope, sans-serif',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px 40px',
    backgroundColor: colors.white,
    borderBottom: `1px solid ${colors.sandy}`,
  },
  headerLeft: {
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
  },
  headerTitle: {
    fontSize: '20px',
    fontWeight: '700',
    margin: 0,
    color: colors.brown,
  },
  userBadge: {
    backgroundColor: colors.sandy,
    color: colors.brown,
    padding: '4px 10px',
    borderRadius: '4px',
    fontSize: '13px',
    fontWeight: '600',
  },
  headerRight: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
  },
  siteLink: {
    color: colors.brown,
    textDecoration: 'none',
    fontSize: '14px',
    fontWeight: '500',
  },
  logoutBtn: {
    backgroundColor: '#dc3545',
    color: '#fff',
    border: 'none',
    padding: '8px 16px',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '14px',
    fontWeight: '600',
  },
  main: {
    padding: '40px',
    maxWidth: '1400px',
    margin: '0 auto',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '30px',
  },
  priceFormGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr auto',
    gap: '16px',
    alignItems: 'end',
  },
  card: {
    backgroundColor: colors.white,
    padding: '30px',
    borderRadius: '12px',
    border: `1px solid ${colors.sandy}`,
    boxShadow: '0 4px 20px rgba(39, 31, 24, 0.05)',
  },
  cardTitle: {
    fontSize: '18px',
    fontWeight: '700',
    marginBottom: '20px',
    color: colors.brown,
    borderBottom: `1px solid ${colors.sandy}`,
    paddingBottom: '10px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  inputGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
  },
  label: {
    fontSize: '13px',
    color: colors.brown,
    fontWeight: '600',
  },
  input: {
    padding: '10px 14px',
    borderRadius: '6px',
    border: `1px solid ${colors.sandy}`,
    backgroundColor: '#fff',
    color: colors.brown,
    fontSize: '14px',
    outline: 'none',
  },
  buttonRow: {
    display: 'flex',
    gap: '10px',
    marginTop: '10px',
  },
  primaryBtn: {
    backgroundColor: colors.swampy,
    color: '#fff',
    border: 'none',
    padding: '12px 20px',
    borderRadius: '6px',
    cursor: 'pointer',
    fontWeight: '600',
    fontSize: '14px',
    height: '42px',
    transition: 'opacity 0.2s',
  },
  cancelBtn: {
    backgroundColor: colors.gray,
    color: colors.brown,
    border: 'none',
    padding: '12px 20px',
    borderRadius: '6px',
    cursor: 'pointer',
    fontWeight: '600',
    fontSize: '14px',
  },
  projectList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    maxHeight: '500px',
    overflowY: 'auto',
  },
  projectItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.sandy,
    padding: '12px 16px',
    borderRadius: '8px',
    border: `1px solid rgba(39, 31, 24, 0.1)`,
  },
  itemActions: {
    display: 'flex',
    gap: '8px',
  },
  editBtn: {
    backgroundColor: '#3498db',
    color: '#fff',
    border: 'none',
    padding: '6px 10px',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '12px',
    fontWeight: '600',
  },
  deleteBtn: {
    backgroundColor: '#e74c3c',
    color: '#fff',
    border: 'none',
    padding: '6px 10px',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '12px',
    fontWeight: '600',
  },
  error: {
    backgroundColor: 'rgba(220, 53, 69, 0.15)',
    color: '#dc3545',
    padding: '10px 14px',
    borderRadius: '6px',
    fontSize: '14px',
    marginBottom: '16px',
    border: '1px solid rgba(220, 53, 69, 0.3)',
    textAlign: 'center',
  },
  alert: {
    padding: '12px 20px',
    borderRadius: '8px',
    marginBottom: '20px',
    fontSize: '14px',
    fontWeight: '500',
  },
  alertSuccess: {
    backgroundColor: 'rgba(125, 143, 116, 0.2)',
    color: '#3b5c35',
    border: '1px solid rgba(125, 143, 116, 0.4)',
  },
  alertError: {
    backgroundColor: 'rgba(220, 53, 69, 0.2)',
    color: '#a94442',
    border: '1px solid rgba(220, 53, 69, 0.4)',
  },
  loadingText: {
    color: '#666',
    textAlign: 'center',
    padding: '20px',
  },
  backLink: {
    marginTop: '20px',
    textAlign: 'center',
  },
  link: {
    color: colors.swampy,
    textDecoration: 'none',
    fontSize: '14px',
    fontWeight: '600',
  },
};
