import { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import useScreenWidth from '../hooks/useScreenWidth';

// Font Style Editor Component
const colorToHex = (colorStr) => {
  if (!colorStr) return '#7D8F74';
  if (colorStr.startsWith('#')) {
    return colorStr.length === 4 ? `#${colorStr[1]}${colorStr[1]}${colorStr[2]}${colorStr[2]}${colorStr[3]}${colorStr[3]}` : colorStr;
  }
  const match = colorStr.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/i);
  if (match) {
    const r = parseInt(match[1]).toString(16).padStart(2, '0');
    const g = parseInt(match[2]).toString(16).padStart(2, '0');
    const b = parseInt(match[3]).toString(16).padStart(2, '0');
    return `#${r}${g}${b}`;
  }
  return '#7D8F74';
};

const FontStyleEditor = ({ styleConfig, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const cfg = styleConfig || { fontFamily: 'Manrope', fontWeight: '400', fontSize: '16px', color: 'rgb(125, 143, 116)', fontStyle: 'normal' };

  const update = (key, val) => {
    onChange({ ...cfg, [key]: val });
  };

  return (
    <div style={{ marginTop: '10px', marginBottom: '12px', border: `1px solid ${colors.sandy}`, borderRadius: '8px', overflow: 'hidden', backgroundColor: '#fff' }}>
      <div
        onClick={() => setIsOpen(!isOpen)}
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '10px 14px',
          backgroundColor: 'rgba(125, 143, 116, 0.08)',
          cursor: 'pointer',
          userSelect: 'none',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ fontSize: '12px', fontWeight: '700', color: 'rgb(125, 143, 116)' }}>⚙️ Налаштування шрифту та стилю тексту</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <span style={{ fontSize: '12px', fontWeight: '600', color: 'rgb(125, 143, 116)' }}>
            {isOpen ? 'Згорнути' : 'Розгорнути'}
          </span>
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{
              transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
              transition: 'transform 0.3s ease',
              color: 'rgb(125, 143, 116)',
            }}
          >
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </div>
      </div>

      <div
        style={{
          maxHeight: isOpen ? '500px' : '0px',
          opacity: isOpen ? 1 : 0,
          overflow: 'hidden',
          transition: 'max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s ease, padding 0.3s ease',
          padding: isOpen ? '14px' : '0 14px',
        }}
      >
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: '10px' }}>
          <div>
            <label style={{ fontSize: '11px', fontWeight: '600', display: 'block', marginBottom: '4px', color: 'rgb(125, 143, 116)' }}>Шрифт</label>
            <select
              value={cfg.fontFamily || 'Manrope'}
              onChange={(e) => update('fontFamily', e.target.value)}
              style={{ width: '100%', padding: '6px', borderRadius: '4px', border: `1px solid ${colors.sandy}`, fontSize: '12px', backgroundColor: '#fff', color: 'rgb(125, 143, 116)' }}
            >
              <option value="Manrope">Manrope</option>
              <option value="Montserrat">Montserrat</option>
              <option value="Inter">Inter</option>
              <option value="Roboto">Roboto</option>
              <option value="Playfair Display">Playfair Display</option>
            </select>
          </div>
          <div>
            <label style={{ fontSize: '11px', fontWeight: '600', display: 'block', marginBottom: '4px', color: 'rgb(125, 143, 116)' }}>Товщина</label>
            <select
              value={cfg.fontWeight || '400'}
              onChange={(e) => update('fontWeight', e.target.value)}
              style={{ width: '100%', padding: '6px', borderRadius: '4px', border: `1px solid ${colors.sandy}`, fontSize: '12px', backgroundColor: '#fff', color: 'rgb(125, 143, 116)' }}
            >
              <option value="300">Light (300)</option>
              <option value="400">Regular (400)</option>
              <option value="500">Medium (500)</option>
              <option value="600">SemiBold (600)</option>
              <option value="700">Bold (700)</option>
            </select>
          </div>
          <div>
            <label style={{ fontSize: '11px', fontWeight: '600', display: 'block', marginBottom: '4px', color: 'rgb(125, 143, 116)' }}>Розмір (16px)</label>
            <input
              type="text"
              value={cfg.fontSize || ''}
              onChange={(e) => update('fontSize', e.target.value)}
              placeholder="16px"
              style={{ width: '100%', padding: '6px 8px', borderRadius: '4px', border: `1px solid ${colors.sandy}`, fontSize: '12px', backgroundColor: '#fff', color: 'rgb(125, 143, 116)' }}
            />
          </div>
          <div>
            <label style={{ fontSize: '11px', fontWeight: '600', display: 'block', marginBottom: '4px', color: 'rgb(125, 143, 116)' }}>Колір (rgb, rgba, hex)</label>
            <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
              <input
                type="text"
                value={cfg.color || ''}
                onChange={(e) => update('color', e.target.value)}
                placeholder="rgb, rgba, #hex"
                style={{ width: '100%', padding: '6px 32px 6px 8px', borderRadius: '4px', border: `1px solid ${colors.sandy}`, fontSize: '12px', backgroundColor: '#fff', color: 'rgb(125, 143, 116)' }}
              />
              <input
                type="color"
                value={colorToHex(cfg.color)}
                onChange={(e) => update('color', e.target.value)}
                title="Обрати колір"
                style={{ position: 'absolute', right: '6px', width: '20px', height: '20px', border: 'none', cursor: 'pointer', background: 'none', padding: 0 }}
              />
            </div>
          </div>
          <div>
            <label style={{ fontSize: '11px', fontWeight: '600', display: 'block', marginBottom: '4px', color: 'rgb(125, 143, 116)' }}>Стиль</label>
            <select
              value={cfg.fontStyle || 'normal'}
              onChange={(e) => update('fontStyle', e.target.value)}
              style={{ width: '100%', padding: '6px', borderRadius: '4px', border: `1px solid ${colors.sandy}`, fontSize: '12px', backgroundColor: '#fff', color: 'rgb(125, 143, 116)' }}
            >
              <option value="normal">Normal</option>
              <option value="italic">Italic</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

// Image Manager Component
const ImageManager = ({ label, images, onImagesChange, projectId, type, maxImages = Infinity, defaultOpen = true }) => {
  const fileInputRef = useRef(null);
  const [uploading, setUploading] = useState(false);
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const safeImages = Array.isArray(images)
    ? images
    : (typeof images === 'string' ? images.split(',').map(s => s.trim()).filter(Boolean) : []);

  const handleUpload = async (e) => {
    const files = Array.from(e.target.files);
    if (files.length === 0) return;

    setUploading(true);
    const formData = new FormData();
    formData.append('projectId', projectId);
    formData.append('type', type);
    files.forEach(file => formData.append('images', file));

    try {
      const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5001';
      const res = await fetch(`${API_URL}/api/upload`, {
        method: 'POST',
        body: formData,
      });
      const data = await res.json();
      if (data.success) {
        if (maxImages === 1) {
          onImagesChange([data.urls[0]]);
        } else {
          onImagesChange([...safeImages, ...data.urls]);
        }
      } else {
        alert('Помилка завантаження: ' + data.message);
      }
    } catch (err) {
      console.error('Upload error:', err);
      alert('Помилка з\'єднання при завантаженні');
    } finally {
      setUploading(false);
      if (fileInputRef.current) fileInputRef.current.value = '';
    }
  };

  const removeImage = (indexToRemove) => {
    onImagesChange(safeImages.filter((_, index) => index !== indexToRemove));
  };

  const moveImage = (index, direction) => {
    const newImages = [...safeImages];
    const targetIndex = index + direction;
    if (targetIndex < 0 || targetIndex >= newImages.length) return;

    const temp = newImages[index];
    newImages[index] = newImages[targetIndex];
    newImages[targetIndex] = temp;
    onImagesChange(newImages);
  };

  return (
    <div className="app__admin__image-manager">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="app__admin__image-manager-header"
      >
        <div className="app__admin__image-manager-info">
          <span className="app__admin__label">{label}</span>
          <span className="app__admin__image-manager-count">
            {safeImages.length} зображення {maxImages === 1 ? '(макс. 1)' : ''}
          </span>
        </div>
        <div className="app__admin__image-manager-controls">
          <span>
            {isOpen ? 'Згорнути' : 'Розгорнути'}
          </span>
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{
              transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
              transition: 'transform 0.3s ease',
            }}
          >
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </div>
      </div>

      <div
        className="app__admin__image-manager-content"
        style={{
          maxHeight: isOpen ? '2000px' : '0px',
          opacity: isOpen ? 1 : 0,
          padding: isOpen ? '16px' : '0 16px',
        }}
      >
        <div className="app__admin__image-manager-grid">
          {safeImages.map((url, index) => (
            <div key={index} className="app__admin__image-manager-item">
              <img src={url} alt="" />
              <button
                type="button"
                onClick={() => removeImage(index)}
                className="app__admin__image-manager-remove"
              >
                ×
              </button>
              {maxImages !== 1 && (
                <div className="app__admin__image-manager-move-row">
                  <button
                    type="button"
                    onClick={() => moveImage(index, -1)}
                    disabled={index === 0}
                    className="app__admin__image-manager-move-btn"
                  >
                    ←
                  </button>
                  <button
                    type="button"
                    onClick={() => moveImage(index, 1)}
                    disabled={index === safeImages.length - 1}
                    className="app__admin__image-manager-move-btn"
                  >
                    →
                  </button>
                </div>
              )}
            </div>
          ))}
          {safeImages.length < maxImages && (
            <div
              onClick={() => !uploading && fileInputRef.current?.click()}
              className={`app__admin__image-manager-upload ${uploading ? 'app__admin__image-manager-upload--uploading' : ''}`}
            >
              <span className="app__admin__image-manager-upload-icon">{uploading ? '...' : '+'}</span>
              <span className="app__admin__image-manager-upload-text">{uploading ? 'Завантаження' : 'Додати'}</span>
              <input
                ref={fileInputRef}
                type='file'
                multiple={maxImages !== 1}
                accept='image/*'
                onChange={handleUpload}
                style={{ display: 'none' }}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [authMode, setAuthMode] = useState('login'); // 'login' | 'forgot' | 'reset'
  const [resetEmail, setResetEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [loginError, setLoginError] = useState('');
  const [loginLoading, setLoginLoading] = useState(false);

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    setLoginError('');
    setLoginLoading(true);

    const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5001';
    const { ok, data } = await safeFetch(`${API_URL}/api/auth/forgot-password`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: resetEmail }),
    });

    setLoginLoading(false);

    if (ok && data && data.success) {
      setAuthMode('reset');
    } else {
      setLoginError((data && data.message) || 'Помилка перевірки email');
    }
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    setLoginError('');
    setLoginLoading(true);

    const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5001';
    const { ok, data } = await safeFetch(`${API_URL}/api/auth/reset-password`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: resetEmail, newPassword }),
    });

    setLoginLoading(false);

    if (ok && data && data.success) {
      alert(data.message || 'Пароль успішно оновлено!');
      setAuthMode('login');
      setPassword('');
      setNewPassword('');
      setResetEmail('');
    } else {
      setLoginError((data && data.message) || 'Помилка зміни паролю');
    }
  };

  const screenWidth = useScreenWidth();

  // Active drawer tab & drawer collapse state
  const [activeTab, setActiveTab] = useState('projects');
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (screenWidth > 0 && screenWidth <= 768) {
      setIsCollapsed(true);
      setIsMobile(true);
    } else if (screenWidth > 0 && screenWidth < 1024) {
      setIsCollapsed(true);
      setIsMobile(false);
    } else {
      setIsMobile(false);
    }
  }, [screenWidth]);

  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  // Projects form state
  const [isEditing, setIsEditing] = useState(false);
  const [currentId, setCurrentId] = useState('');
  const [formData, setFormData] = useState({
    id: '',
    orderNumber: 0,
    description: '',
    area: '',
    visualisation: [],
    realization: [],
    showRealization: true,
  });

  // Price form state & snapshot
  const [priceData, setPriceData] = useState({
    designProject: '20 $ кв.м.',
    technicalProject: '10 $ кв.м.',
    authorSupervision: 'від 250$ в міс.',
    designPriceStyle: null,
    techPriceStyle: null,
    authorPriceStyle: null,
  });
  const [initialPriceData, setInitialPriceData] = useState(null);

  // Banners & Content states & snapshots
  const [mainBannerImages, setMainBannerImages] = useState([
    '/assets/images/main-carousel/04.jpg',
    '/assets/images/main-carousel/01.jpg',
    '/assets/images/main-carousel/03.jpg',
    '/assets/images/main-carousel/02.jpg',
    '/assets/images/main-carousel/05.jpg',
    '/assets/images/main-carousel/06.jpg',
    '/assets/images/main-carousel/07.jpg',
    '/assets/images/main-carousel/08.jpg',
    '/assets/images/main-carousel/09.jpg',
    '/assets/images/main-carousel/10.jpg',
    '/assets/images/main-carousel/11.jpg',
    '/assets/images/main-carousel/12.jpg',
  ]);
  const [initialMainBanner, setInitialMainBanner] = useState([]);

  const [techBannerImages, setTechBannerImages] = useState([
    '/assets/images/prices/1.jpg',
    '/assets/images/prices/2.jpg',
    '/assets/images/prices/3.jpg',
    '/assets/images/prices/4.jpg',
  ]);
  const [initialTechBanner, setInitialTechBanner] = useState([]);

  const [aboutData, setAboutData] = useState({
    title: 'ПРО МЕНЕ:',
    text: '',
    photo: '',
    titleStyle: null,
    textStyle: null,
    phone: '+380978159804',
    viber: '+380978159804',
    telegram: '+380978159804',
    email: 'arinakozlovska@gmail.com',
  });
  const [initialAboutData, setInitialAboutData] = useState(null);

  const [designProjectData, setDesignProjectData] = useState({
    title: '20 $ кв.м. Дизайн проєкт',
    image: '/assets/images/prices/visual.jpg',
    steps: [
      'Виїзд на заміри приміщення. Узгодження функціоналу кімнат та стилю інтер’єру. Обговорення кольорів і матеріалів.',
      'Створення обмірного плану. Затвердження плану розташування меблів і обладнання. Пропонується декілька варіантів креслень для різних кімнат.',
      'План демонтажу / монтажу елементів, План електрики - виводи точок освітлення, розеток, вимикачів, електровиводів. План виводів води і сантехніки. Схема покриття підлоги. План стелі, розміщення кондиціонерів.',
      'Візуалізація кімнат. Розгортки стін у кресленнях. Видача проєкту у роздрукованному і цифровому вигляді.'
    ],
    titleStyle: null,
    stepStyle: null,
  });
  const [initialDesignProjectData, setInitialDesignProjectData] = useState(null);

  const [techProjectData, setTechProjectData] = useState({
    title: '10 $ кв.м. Технічний проєкт',
    image: '/assets/images/prices/technical.jpg',
    steps: [
      'Виїзд на заміри приміщення. Узгодження функціоналу кімнат.',
      'Створення обмірного плану, плану демонтажу перегородок. Затвердження плану розташування меблів і обладнання. Пропонується декілька варіантів кресленнь для різних кімнат.',
      'План демонтажу / монтажу елементів, План електрики - виводи точок освітлення, розеток, вимикачів, електровиводів. План виводів води і сантехніки. Схема покриття підлоги. План стелі, розміщення кондиціонерів. Розгортки стін у кресленнях. Видача проєкту у цифровому вигляді.'
    ],
    titleStyle: null,
    stepStyle: null,
  });
  const [initialTechProjectData, setInitialTechProjectData] = useState(null);

  const [authorSupervisionData, setAuthorSupervisionData] = useState({
    title: 'від 250$ в міс. Авторський нагляд, м.Львів:',
    description: 'Виїзди в процесі ремонту, контроль роботи згідно проєкту. Закупівля матеріалів.',
    titleStyle: null,
    descStyle: null,
  });
  const [initialAuthorSupervisionData, setInitialAuthorSupervisionData] = useState(null);

  // Modal notification state
  const [modalState, setModalState] = useState({
    isOpen: false,
    title: '',
    message: '',
    type: 'success',
  });

  const closeModal = () => {
    setModalState({ isOpen: false, title: '', message: '', type: 'success' });
  };

  const safeFetch = async (url, options = {}) => {
    try {
      const res = await fetch(url, options);
      const ct = res.headers.get('content-type');
      if (res.ok && ct && ct.includes('application/json')) {
        const data = await res.json();
        return { ok: true, data };
      }
      return { ok: false, status: res.status };
    } catch (err) {
      console.error(`Fetch error for ${url}:`, err);
      return { ok: false, error: err };
    }
  };

  useEffect(() => {
    const token = localStorage.getItem('arina_admin_token');
    if (token) {
      setIsAuthenticated(true);
      fetchAllData();
    } else {
      setLoading(false);
    }
  }, []);

  const fetchAllData = async () => {
    setLoading(true);
    await Promise.all([
      fetchProjects(),
      fetchPrices(),
      fetchContent('mainBanner', setMainBannerImages, setInitialMainBanner, [
        '/assets/images/main-carousel/04.jpg',
        '/assets/images/main-carousel/01.jpg',
        '/assets/images/main-carousel/03.jpg',
        '/assets/images/main-carousel/02.jpg',
        '/assets/images/main-carousel/05.jpg',
        '/assets/images/main-carousel/06.jpg',
        '/assets/images/main-carousel/07.jpg',
        '/assets/images/main-carousel/08.jpg',
        '/assets/images/main-carousel/09.jpg',
        '/assets/images/main-carousel/10.jpg',
        '/assets/images/main-carousel/11.jpg',
        '/assets/images/main-carousel/12.jpg',
      ]),
      fetchContent('techBanner', setTechBannerImages, setInitialTechBanner, [
        '/assets/images/prices/1.jpg',
        '/assets/images/prices/2.jpg',
        '/assets/images/prices/3.jpg',
        '/assets/images/prices/4.jpg',
      ]),
      fetchContent('about', setAboutData, setInitialAboutData, {
        title: 'ПРО МЕНЕ:',
        text: 'Проєктування просторів для життя - захоплююча, надихаюча робота. Ціную кожен етап в процесі створення дизайн проєкту від планувальних креслень до реалізації ідей. Маю освіту дизайнера інтер’єру у Львівській національній академії мистецтв і два роки досвіду по професії.\n\nМоя мета - забезпечити клієнтам гармонійний простір, який відповідає їхнім потребам і стилю життя. Завжди прагну втілити ідеї та концепції, які створюють грамотні ергономічні рішення, використовую поєднання природних кольорів. Будь-який проєкт, незалежний від його розміру чи складності, розробляється з увагою до кожної деталі. Під час роботи завжди на зв’язку, щоб зробити процес створення максимально зручним та приємним для моїх клієнтів.',
        photo: '/assets/images/about/person.png',
        titleStyle: null,
        textStyle: null,
        phone: '+380978159804',
        viber: '+380978159804',
        telegram: '+380978159804',
        email: 'arinakozlovska@gmail.com',
      }),
      fetchContent('designProject', setDesignProjectData, setInitialDesignProjectData, {
        title: '20 $ кв.м. Дизайн проєкт',
        image: '/assets/images/prices/visual.jpg',
        steps: [
          'Виїзд на заміри приміщення. Узгодження функціоналу кімнат та стилю інтер’єру. Обговорення кольорів і матеріалів.',
          'Створення обмірного плану. Затвердження плану розташування меблів і обладнання. Пропонується декілька варіантів креслень для різних кімнат.',
          'План демонтажу / монтажу елементів, План електрики - виводи точок освітлення, розеток, вимикачів, електровиводів. План виводів води і сантехніки. Схема покриття підлоги. План стелі, розміщення кондиціонерів.',
          'Візуалізація кімнат. Розгортки стін у кресленнях. Видача проєкту у роздрукованному і цифровому вигляді.'
        ],
        titleStyle: null,
        stepStyle: null,
      }),
      fetchContent('techProject', setTechProjectData, setInitialTechProjectData, {
        title: '10 $ кв.м. Технічний проєкт',
        image: '/assets/images/prices/technical.jpg',
        steps: [
          'Виїзд на заміри приміщення. Узгодження функціоналу кімнат.',
          'Створення обмірного плану, плану демонтажу перегородок. Затвердження плану розташування меблів і обладнання. Пропонується декілька варіантів кресленнь для різних кімнат.',
          'План демонтажу / монтажу елементів, План електрики - виводи точок освітлення, розеток, вимикачів, електровиводів. План виводів води і сантехніки. Схема покриття підлоги. План стелі, розміщення кондиціонерів. Розгортки стін у кресленнях. Видача проєкту у цифровому вигляді.'
        ],
        titleStyle: null,
        stepStyle: null,
      }),
      fetchContent('authorSupervision', setAuthorSupervisionData, setInitialAuthorSupervisionData, {
        title: 'від 250$ в міс. Авторський нагляд, м.Львів:',
        description: 'Виїзди в процесі ремонту, контроль роботи згідно проєкту. Закупівля матеріалів.',
        titleStyle: null,
        descStyle: null,
      }),
    ]);
    setLoading(false);
  };

  const fetchProjects = async () => {
    const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5001';
    const { ok, data } = await safeFetch(`${API_URL}/api/projects`);
    if (ok && data) {
      if (Array.isArray(data.projects)) {
        setProjects(data.projects);
      } else if (Array.isArray(data)) {
        setProjects(data);
      }
    }
  };

  const fetchPrices = async () => {
    const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5001';
    const { ok, data } = await safeFetch(`${API_URL}/api/prices`);
    if (ok && data) {
      const p = {
        designProject: data.designProject || '20 $ кв.м.',
        technicalProject: data.technicalProject || '10 $ кв.м.',
        authorSupervision: data.authorSupervision || 'від 250$ в міс.',
        designPriceStyle: data.designPriceStyle || null,
        techPriceStyle: data.techPriceStyle || null,
        authorPriceStyle: data.authorPriceStyle || null,
      };
      setPriceData(p);
      setInitialPriceData(JSON.parse(JSON.stringify(p)));
    }
  };

  const fetchContent = async (key, setter, setInitialFn, defaultVal) => {
    const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5001';
    const { ok, data } = await safeFetch(`${API_URL}/api/content/${key}`);
    let val = defaultVal;
    if (ok && data !== null && data !== undefined) {
      if (Array.isArray(data)) {
        val = data.length > 0 ? data : defaultVal;
      } else if (typeof data === 'object' && Object.keys(data).length > 0) {
        val = data;
      }
    }
    if (key === 'about') {
      val = {
        ...defaultVal,
        ...val,
        phone: val.phone || defaultVal.phone,
        viber: val.viber || defaultVal.viber,
        telegram: val.telegram || defaultVal.telegram,
        email: val.email || defaultVal.email,
      };
      if (!val.text && (val.text1 || val.text2)) {
        val.text = [val.text1, val.text2].filter(Boolean).join('\n\n');
      }
      if (!val.text) {
        val.text = defaultVal.text;
      }
    }
    if (key === 'designProject' || key === 'techProject') {
      if (!Array.isArray(val.steps) && (val.text1 || val.text2 || val.text3 || val.text4)) {
        val.steps = [val.text1, val.text2, val.text3, val.text4].filter(Boolean);
      }
      if (!Array.isArray(val.steps) || val.steps.length === 0) {
        val.steps = defaultVal.steps;
      }
    }
    if ((key === 'mainBanner' || key === 'techBanner') && (!Array.isArray(val) || val.length === 0)) {
      val = defaultVal;
    }
    setter(val);
    if (setInitialFn) setInitialFn(JSON.parse(JSON.stringify(val)));
  };

  const saveContent = async (key, dataToSave) => {
    const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5001';
    const { ok, data } = await safeFetch(`${API_URL}/api/content/${key}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(dataToSave),
    });
    if (ok && data && data.success) {
      if (key === 'mainBanner') setInitialMainBanner(JSON.parse(JSON.stringify(dataToSave)));
      if (key === 'techBanner') setInitialTechBanner(JSON.parse(JSON.stringify(dataToSave)));
      if (key === 'about') setInitialAboutData(JSON.parse(JSON.stringify(dataToSave)));
      if (key === 'designProject') setInitialDesignProjectData(JSON.parse(JSON.stringify(dataToSave)));
      if (key === 'techProject') setInitialTechProjectData(JSON.parse(JSON.stringify(dataToSave)));
      if (key === 'authorSupervision') setInitialAuthorSupervisionData(JSON.parse(JSON.stringify(dataToSave)));

      setModalState({ isOpen: true, title: 'Успіх', message: 'Зміни успішно збережено!', type: 'success' });
    } else {
      setModalState({ isOpen: true, title: 'Помилка', message: 'Не вдалось зберегти зміни', type: 'error' });
    }
  };

  const handleCancel = (restoreFn) => {
    restoreFn();
    setModalState({
      isOpen: true,
      title: 'Скасовано',
      message: 'Внесені зміни було скасовано.',
      type: 'success',
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoginError('');
    setLoginLoading(true);

    const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5001';
    const { ok, data } = await safeFetch(`${API_URL}/api/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    });

    setLoginLoading(false);

    if (ok && data && data.success) {
      localStorage.setItem('arina_admin_token', data.token);
      setIsAuthenticated(true);
      fetchAllData();
    } else {
      setLoginError((data && data.message) || 'Невірний логін або пароль');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('arina_admin_token');
    setIsAuthenticated(false);
    setUsername('');
    setPassword('');
  };

  const handlePriceSubmit = async (e) => {
    e.preventDefault();
    const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5001';
    const { ok, data } = await safeFetch(`${API_URL}/api/prices`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(priceData),
    });
    if (ok && data && data.success) {
      setInitialPriceData(JSON.parse(JSON.stringify(priceData)));
      setModalState({ isOpen: true, title: 'Успіх', message: 'Ціни успішно оновлено!', type: 'success' });
    } else {
      setModalState({ isOpen: true, title: 'Помилка', message: (data && data.message) || 'Помилка оновлення', type: 'error' });
    }
  };

  const handleOpenCreate = () => {
    setIsEditing(false);
    setCurrentId('');
    setFormData({
      id: `project${Date.now()}`,
      orderNumber: projects.length,
      description: '',
      area: '',
      visualisation: [],
      realization: [],
      showRealization: true,
    });
  };

  const handleOpenEdit = (project) => {
    setIsEditing(true);
    setCurrentId(project.id);
    setFormData({
      id: project.id,
      orderNumber: project.orderNumber ?? 0,
      description: project.description || '',
      area: project.area || '',
      visualisation: Array.isArray(project.visualisation) ? project.visualisation : [],
      realization: Array.isArray(project.realization) ? project.realization : [],
      showRealization: project.showRealization !== undefined ? project.showRealization : true,
    });
  };

  const handleProjectSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      id: formData.id,
      orderNumber: Number(formData.orderNumber) || 0,
      description: formData.description,
      area: formData.area,
      visualisation: formData.visualisation,
      realization: formData.realization,
      showRealization: formData.showRealization,
    };

    const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5001';
    const url = isEditing
      ? `${API_URL}/api/projects/${currentId}`
      : `${API_URL}/api/projects`;
    const method = isEditing ? 'PUT' : 'POST';

    const { ok, data } = await safeFetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    if (ok && data && data.success) {
      setModalState({ isOpen: true, title: 'Успіх', message: 'Проєкт успішно збережено!', type: 'success' });
      fetchProjects();
      if (!isEditing) handleOpenCreate();
    } else {
      setModalState({ isOpen: true, title: 'Помилка', message: (data && data.message) || 'Помилка збереження', type: 'error' });
    }
  };

  const handleDeleteProject = async (id) => {
    if (!confirm(`Ви дійсно хочете видалити проєкт ${id}?`)) return;

    const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5001';
    const { ok, data } = await safeFetch(`${API_URL}/api/projects/${id}`, { method: 'DELETE' });

    if (ok && data && data.success) {
      setModalState({ isOpen: true, title: 'Успіх', message: 'Проєкт успішно видалено!', type: 'success' });
      fetchProjects();
    } else {
      setModalState({ isOpen: true, title: 'Помилка', message: (data && data.message) || 'Помилка видалення', type: 'error' });
    }
  };

  if (!isAuthenticated) {
    return (
      <>
        <Head>
          <title>Вхід в Адмін-панель | Аріна Козловська</title>
        </Head>
        <div className="app__admin__login-container">
          <div className="app__admin__login-card">
            <h1 className="app__admin__login-title">
              {authMode === 'login' && 'Адмін-панель'}
              {authMode === 'forgot' && 'Відновлення пароля'}
              {authMode === 'reset' && 'Новий пароль'}
            </h1>
            <p style={{ color: 'rgb(125, 143, 116)', fontSize: '14px', marginBottom: '24px', textAlign: 'center' }}>
              {authMode === 'login' && 'Введіть облікові дані для входу'}
              {authMode === 'forgot' && 'Введіть зареєстровану пошту (arinakozlovska@gmail.com)'}
              {authMode === 'reset' && 'Введіть новий пароль для адміністратора'}
            </p>

            {loginError && <div className="app__admin__error">{loginError}</div>}

            {authMode === 'login' && (
              <form onSubmit={handleLogin} className="app__admin__form">
                <div className="app__admin__input-group">
                  <label className="app__admin__label">Логін</label>
                  <input
                    type='text'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="app__admin__input"
                    placeholder='Введіть логін'
                    required
                  />
                </div>

                <div className="app__admin__input-group">
                  <label className="app__admin__label">Пароль</label>
                  <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                    <input
                      type={showPassword ? 'text' : 'password'}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="app__admin__input"
                      placeholder='Введіть пароль'
                      style={{ width: '100%', paddingRight: '40px' }}
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      title={showPassword ? "Приховати пароль" : "Показати пароль"}
                      style={{
                        position: 'absolute',
                        right: '10px',
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        padding: 0,
                        display: 'flex',
                        alignItems: 'center',
                        color: 'rgb(125, 143, 116)'
                      }}
                    >
                      {showPassword ? (
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                          <line x1="1" y1="1" x2="23" y2="23"></line>
                        </svg>
                      ) : (
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                          <circle cx="12" cy="12" r="3"></circle>
                        </svg>
                      )}
                    </button>
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', width: '100%', marginTop: '10px' }}>
                  <button type='submit' className="app__admin__btn app__admin__btn--primary" style={{ width: '100%' }} disabled={loginLoading}>
                    {loginLoading ? 'Вхід...' : 'Увійти'}
                  </button>
                  <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', width: '100%' }}>
                    <button type='button' onClick={() => { setAuthMode('forgot'); setLoginError(''); }} className="app__admin__btn app__admin__btn--cancel" style={{ flex: 1 }}>
                      Змінити пароль
                    </button>
                    <button type='button' onClick={() => { setAuthMode('forgot'); setLoginError(''); }} className="app__admin__btn app__admin__btn--cancel" style={{ flex: 1 }}>
                      Забули пароль
                    </button>
                  </div>
                </div>
              </form>
            )}

            {authMode === 'forgot' && (
              <form onSubmit={handleForgotPassword} className="app__admin__form">
                <div className="app__admin__input-group">
                  <label className="app__admin__label">Email</label>
                  <input
                    type='email'
                    value={resetEmail}
                    onChange={(e) => setResetEmail(e.target.value)}
                    className="app__admin__input"
                    placeholder='arinakozlovska@gmail.com'
                    required
                  />
                </div>

                <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', width: '100%', marginTop: '10px' }}>
                  <button type='submit' className="app__admin__btn app__admin__btn--primary" style={{ flex: 1 }} disabled={loginLoading}>
                    {loginLoading ? 'Перевірка...' : 'Далі'}
                  </button>
                  <button type='button' onClick={() => { setAuthMode('login'); setLoginError(''); }} className="app__admin__btn app__admin__btn--cancel" style={{ flex: 1 }}>
                    Назад
                  </button>
                </div>
              </form>
            )}

            {authMode === 'reset' && (
              <form onSubmit={handleResetPassword} className="app__admin__form">
                <div className="app__admin__input-group">
                  <label className="app__admin__label">Новий пароль</label>
                  <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                    <input
                      type={showNewPassword ? 'text' : 'password'}
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      className="app__admin__input"
                      placeholder='Введіть новий пароль'
                      style={{ width: '100%', paddingRight: '40px' }}
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowNewPassword(!showNewPassword)}
                      title={showNewPassword ? "Приховати пароль" : "Показати пароль"}
                      style={{
                        position: 'absolute',
                        right: '10px',
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        padding: 0,
                        display: 'flex',
                        alignItems: 'center',
                        color: 'rgb(125, 143, 116)'
                      }}
                    >
                      {showNewPassword ? (
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                          <line x1="1" y1="1" x2="23" y2="23"></line>
                        </svg>
                      ) : (
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                          <circle cx="12" cy="12" r="3"></circle>
                        </svg>
                      )}
                    </button>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', width: '100%', marginTop: '10px' }}>
                  <button type='submit' className="app__admin__btn app__admin__btn--primary" style={{ flex: 1 }} disabled={loginLoading}>
                    {loginLoading ? 'Збереження...' : 'Зберегти'}
                  </button>
                  <button type='button' onClick={() => { setAuthMode('login'); setLoginError(''); }} className="app__admin__btn app__admin__btn--cancel" style={{ flex: 1 }}>
                    Назад
                  </button>
                </div>
              </form>
            )}

            <div style={{ marginTop: '20px', textAlign: 'center' }}>
              <a href='/' style={{ color: 'rgb(125, 143, 116)', textDecoration: 'none', fontSize: '14px', fontWeight: '600' }}>← На головний сайт</a>
            </div>
          </div>
        </div>
      </>
    );
  }

  const drawerWidth = isCollapsed ? (isMobile ? '40px' : '88px') : '260px';

  return (
    <>
      <Head>
        <title>Адмін-панель | Аріна Козловська</title>
      </Head>
      <div className="app__admin">
        {/* Drawer Sidebar */}
        <aside className="app__admin__drawer" style={{ width: drawerWidth }}>
          <div className={`app__admin__drawer-header ${isCollapsed ? 'app__admin__drawer-header--collapsed' : ''}`}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: isCollapsed ? 'center' : 'space-between', width: '100%' }}>
              {!isCollapsed && <h2 className="app__admin__drawer-title">Адмін-панель</h2>}
              <button
                onClick={() => setIsCollapsed(!isCollapsed)}
                className="app__admin__collapse-btn"
                title={isCollapsed ? 'Розгорнути меню' : 'Згорнути меню'}
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{
                    transform: isCollapsed ? 'rotate(-90deg)' : 'rotate(90deg)',
                    transition: 'transform 0.3s ease',
                  }}
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>
            </div>
            {!isCollapsed && <span className="app__admin__user-badge">Arina-admin</span>}
          </div>

          <nav className="app__admin__drawer-nav">
            <button
              onClick={() => { setActiveTab('projects'); setIsCollapsed(true); }}
              className={`app__admin__drawer-item ${activeTab === 'projects' ? 'app__admin__drawer-item--active' : ''} ${isCollapsed ? 'app__admin__drawer-item--collapsed' : ''}`}
              title="Проєкти"
            >
              <svg width="32" height="32" viewBox="0 0 24 24" fill={activeTab === 'projects' ? '#fff' : 'rgb(125, 143, 116)'} style={{ flexShrink: 0 }}>
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
              </svg>
              {!isCollapsed && <span className="app__admin__drawer-item-text">Проєкти</span>}
            </button>
            <button
              onClick={() => { setActiveTab('prices'); setIsCollapsed(true); }}
              className={`app__admin__drawer-item ${activeTab === 'prices' ? 'app__admin__drawer-item--active' : ''} ${isCollapsed ? 'app__admin__drawer-item--collapsed' : ''}`}
              title="Ціни"
            >
              <svg width="32" height="32" viewBox="0 0 24 24" fill={activeTab === 'prices' ? '#fff' : 'rgb(125, 143, 116)'} style={{ flexShrink: 0 }}>
                <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z" />
              </svg>
              {!isCollapsed && <span className="app__admin__drawer-item-text">Ціни</span>}
            </button>
            <button
              onClick={() => { setActiveTab('mainBanner'); setIsCollapsed(true); }}
              className={`app__admin__drawer-item ${activeTab === 'mainBanner' ? 'app__admin__drawer-item--active' : ''} ${isCollapsed ? 'app__admin__drawer-item--collapsed' : ''}`}
              title="Головний банер"
            >
              <svg width="32" height="32" viewBox="0 0 24 24" fill={activeTab === 'mainBanner' ? '#fff' : 'rgb(125, 143, 116)'} style={{ flexShrink: 0 }}>
                <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" />
              </svg>
              {!isCollapsed && <span className="app__admin__drawer-item-text">Головний банер</span>}
            </button>
            <button
              onClick={() => { setActiveTab('techBanner'); setIsCollapsed(true); }}
              className={`app__admin__drawer-item ${activeTab === 'techBanner' ? 'app__admin__drawer-item--active' : ''} ${isCollapsed ? 'app__admin__drawer-item--collapsed' : ''}`}
              title="Технічний банер"
            >
              <svg width="32" height="32" viewBox="0 0 24 24" fill={activeTab === 'techBanner' ? '#fff' : 'rgb(125, 143, 116)'} style={{ flexShrink: 0 }}>
                <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z" />
              </svg>
              {!isCollapsed && <span className="app__admin__drawer-item-text">Технічний банер</span>}
            </button>
            <button
              onClick={() => { setActiveTab('about'); setIsCollapsed(true); }}
              className={`app__admin__drawer-item ${activeTab === 'about' ? 'app__admin__drawer-item--active' : ''} ${isCollapsed ? 'app__admin__drawer-item--collapsed' : ''}`}
              title="Про мене"
            >
              <svg width="32" height="32" viewBox="0 0 24 24" fill={activeTab === 'about' ? '#fff' : 'rgb(125, 143, 116)'} style={{ flexShrink: 0 }}>
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
              </svg>
              {!isCollapsed && <span className="app__admin__drawer-item-text">Про мене</span>}
            </button>
            <button
              onClick={() => { setActiveTab('designProject'); setIsCollapsed(true); }}
              className={`app__admin__drawer-item ${activeTab === 'designProject' ? 'app__admin__drawer-item--active' : ''} ${isCollapsed ? 'app__admin__drawer-item--collapsed' : ''}`}
              title="Дизайн проєкт"
            >
              <svg width="32" height="32" viewBox="0 0 24 24" fill={activeTab === 'designProject' ? '#fff' : 'rgb(125, 143, 116)'} style={{ flexShrink: 0 }}>
                <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM19 18H6c-2.21 0-4-1.79-4-4 0-2.05 1.53-3.76 3.56-3.97l1.07-.11.5-.95C8.08 7.14 9.94 6 12 6c2.62 0 4.88 1.86 5.39 4.43l.3 1.5 1.53.11c1.56.1 2.78 1.41 2.78 2.96 0 1.65-1.35 3-3 3z" />
              </svg>
              {!isCollapsed && <span className="app__admin__drawer-item-text">Дизайн проєкт</span>}
            </button>
            <button
              onClick={() => { setActiveTab('techProject'); setIsCollapsed(true); }}
              className={`app__admin__drawer-item ${activeTab === 'techProject' ? 'app__admin__drawer-item--active' : ''} ${isCollapsed ? 'app__admin__drawer-item--collapsed' : ''}`}
              title="Технічний проєкт"
            >
              <svg width="32" height="32" viewBox="0 0 24 24" fill={activeTab === 'techProject' ? '#fff' : 'rgb(125, 143, 116)'} style={{ flexShrink: 0 }}>
                <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" />
              </svg>
              {!isCollapsed && <span className="app__admin__drawer-item-text">Технічний проєкт</span>}
            </button>
            <button
              onClick={() => { setActiveTab('authorSupervision'); setIsCollapsed(true); }}
              className={`app__admin__drawer-item ${activeTab === 'authorSupervision' ? 'app__admin__drawer-item--active' : ''} ${isCollapsed ? 'app__admin__drawer-item--collapsed' : ''}`}
              title="Дизайнерський нагляд"
            >
              <svg width="32" height="32" viewBox="0 0 24 24" fill={activeTab === 'authorSupervision' ? '#fff' : 'rgb(125, 143, 116)'} style={{ flexShrink: 0 }}>
                <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
              </svg>
              {!isCollapsed && <span className="app__admin__drawer-item-text">Дизайнерський нагляд</span>}
            </button>

            {!isCollapsed && (
              <a
                href='/'
                target='_blank'
                className="app__admin__site-link"
                style={{ borderTop: `1px solid ${colors.sandy}`, paddingTop: '12px', marginTop: '4px' }}
              >
                Переглянути сайт ↗
              </a>
            )}
            <button
              onClick={handleLogout}
              className={`app__admin__drawer-item app__admin__drawer-item--logout ${isCollapsed ? 'app__admin__drawer-item--collapsed' : ''}`}
              title="Вийти"
            >
              <svg width="32" height="32" viewBox="0 0 24 24" style={{ flexShrink: 0 }}>
                <path d="M10.09 15.59L11.5 17l5-5-5-5-1.41 1.41L12.67 11H3v2h9.67l-2.58 2.59zM19 3H5c-1.11 0-2 .9-2 2v4h2V5h14v14H5v-4H3v4c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/>
              </svg>
              {!isCollapsed && <span className="app__admin__drawer-item-text">Вийти</span>}
            </button>
          </nav>
        </aside>

        {/* Main Content Area */}
        <main className="app__admin__main">
          {loading ? (
            <p className="app__admin__loading">Завантаження даних...</p>
          ) : (
            <>
              {/* 1. PROJECTS TAB */}
              {activeTab === 'projects' && (
                <div>
                  <h1 className="app__admin__section-title">Керування проєктами</h1>
                  <div className="app__admin__projects-grid">
                    <div className="app__admin__card">
                      <h2 className="app__admin__card-title">
                        {isEditing ? `Редагувати проєкт: ${currentId}` : 'Додати новий проєкт'}
                      </h2>
                      <form onSubmit={handleProjectSubmit} className="app__admin__form">
                        <div className="app__admin__toggle-wrapper">
                          <label className="app__admin__toggle-label">Показувати вкладку "Реалізація"</label>
                          <div
                            onClick={() => setFormData({ ...formData, showRealization: !formData.showRealization })}
                            className={`app__admin__toggle-track ${formData.showRealization ? 'app__admin__toggle-track--active' : 'app__admin__toggle-track--inactive'}`}
                          >
                            <div
                              className={`app__admin__toggle-thumb ${formData.showRealization ? 'app__admin__toggle-thumb--active' : 'app__admin__toggle-thumb--inactive'}`}
                            />
                          </div>
                        </div>

                        <div className="app__admin__input-group">
                          <label className="app__admin__label">ID проєкту (напр. project9)</label>
                          <input
                            type='text'
                            value={formData.id}
                            onChange={(e) => setFormData({ ...formData, id: e.target.value })}
                            className="app__admin__input"
                            placeholder='Введіть унікальний ID (напр. project6)'
                            required
                            disabled={isEditing}
                          />
                        </div>

                        <div className="app__admin__input-group">
                          <label className="app__admin__label">Порядковий номер (orderNumber)</label>
                          <input
                            type='number'
                            value={formData.orderNumber}
                            onChange={(e) => setFormData({ ...formData, orderNumber: e.target.value })}
                            className="app__admin__input"
                            placeholder='Введіть число (напр. 1)'
                            required
                          />
                        </div>

                        <div className="app__admin__input-group">
                          <label className="app__admin__label">Опис об'єкта</label>
                          <input
                            type='text'
                            value={formData.description}
                            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                            className="app__admin__input"
                            placeholder='Введіть опис об’єкта'
                            required
                          />
                        </div>

                        <div className="app__admin__input-group">
                          <label className="app__admin__label">Площа</label>
                          <input
                            type='text'
                            value={formData.area}
                            onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                            className="app__admin__input"
                            placeholder='Введіть площу (напр. 120 м²)'
                            required
                          />
                        </div>

                        <ImageManager
                          label='Візуалізація'
                          images={formData.visualisation}
                          onImagesChange={(newVis) => setFormData({ ...formData, visualisation: newVis })}
                          projectId={formData.id}
                          type='visualisation'
                          defaultOpen={false}
                        />

                        <ImageManager
                          label='Реалізація'
                          images={formData.realization}
                          onImagesChange={(newReal) => setFormData({ ...formData, realization: newReal })}
                          projectId={formData.id}
                          type='realization'
                          defaultOpen={false}
                        />

                        <div className="app__admin__button-row">
                          <button type='submit' className="app__admin__btn app__admin__btn--primary">
                            Зберегти
                          </button>
                          <button type='button' onClick={() => { handleOpenCreate(); handleCancel(fetchProjects); }} className="app__admin__btn app__admin__btn--cancel">
                            Скасувати
                          </button>
                        </div>
                      </form>
                    </div>

                    <div className="app__admin__card">
                      <h2 className="app__admin__card-title">Список проєктів ({projects.length})</h2>
                      {projects.length === 0 ? (
                        <p className="app__admin__loading">Проєктів поки немає.</p>
                      ) : (
                        <div className="app__admin__project-list">
                          {projects.map((p) => (
                            <div key={p.id} className="app__admin__project-item">
                              <div>
                                <span style={{ backgroundColor: colors.swampy, color: '#fff', padding: '2px 6px', borderRadius: '4px', fontSize: '11px', marginRight: '8px', fontWeight: '600' }}>
                                  №{p.orderNumber ?? 0}
                                </span>
                                {p.description} ({p.area})
                              </div>
                              <div className="app__admin__item-actions">
                                <button onClick={() => handleOpenEdit(p)} className="app__admin__btn app__admin__btn--edit">Редагувати</button>
                                <button onClick={() => handleDeleteProject(p.id)} className="app__admin__btn app__admin__btn--delete">Видалити</button>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* 2. PRICES TAB */}
              {activeTab === 'prices' && (
                <div className="app__admin__card">
                  <h1 className="app__admin__section-title">Керування цінами</h1>
                  <form onSubmit={handlePriceSubmit} className="app__admin__form">
                    <div className="app__admin__input-group">
                      <label className="app__admin__label">Дизайн проєкт (напр. 20 $ кв.м.)</label>
                      <FontStyleEditor
                        styleConfig={priceData.designPriceStyle}
                        onChange={(style) => setPriceData({ ...priceData, designPriceStyle: style })}
                      />
                      <input
                        type='text'
                        value={priceData.designProject}
                        onChange={(e) => setPriceData({ ...priceData, designProject: e.target.value })}
                        className="app__admin__input"
                        required
                      />
                    </div>

                    <div className="app__admin__input-group">
                      <label className="app__admin__label">Технічний проєкт (напр. 10 $ кв.м.)</label>
                      <FontStyleEditor
                        styleConfig={priceData.techPriceStyle}
                        onChange={(style) => setPriceData({ ...priceData, techPriceStyle: style })}
                      />
                      <input
                        type='text'
                        value={priceData.technicalProject}
                        onChange={(e) => setPriceData({ ...priceData, technicalProject: e.target.value })}
                        className="app__admin__input"
                        required
                      />
                    </div>

                    <div className="app__admin__input-group">
                      <label className="app__admin__label">Авторський нагляд (напр. від 250$ в міс.)</label>
                      <FontStyleEditor
                        styleConfig={priceData.authorPriceStyle}
                        onChange={(style) => setPriceData({ ...priceData, authorPriceStyle: style })}
                      />
                      <input
                        type='text'
                        value={priceData.authorSupervision}
                        onChange={(e) => setPriceData({ ...priceData, authorSupervision: e.target.value })}
                        className="app__admin__input"
                        required
                      />
                    </div>

                    <div className="app__admin__button-row">
                      <button type='submit' className="app__admin__btn app__admin__btn--primary">
                        Зберегти
                      </button>
                      <button type='button' onClick={() => handleCancel(() => { if (initialPriceData) setPriceData({ ...initialPriceData }); })} className="app__admin__btn app__admin__btn--cancel">
                        Скасувати
                      </button>
                    </div>
                  </form>
                </div>
              )}

              {/* 3. MAIN BANNER TAB */}
              {activeTab === 'mainBanner' && (
                <div className="app__admin__card">
                  <h1 className="app__admin__section-title">Керування головним банером (каруселлю)</h1>
                  <p style={{ marginBottom: '20px', fontSize: '14px', color: 'rgb(125, 143, 116)' }}>
                    Додавайте, видаляйте або змінюйте порядок слайдів головного банера на сайті.
                  </p>
                  <ImageManager
                    label='Слайди головного банера'
                    images={mainBannerImages}
                    onImagesChange={(newImgs) => setMainBannerImages(newImgs)}
                    projectId='main-carousel'
                    type='carousel'
                  />
                  <div className="app__admin__button-row">
                    <button onClick={() => saveContent('mainBanner', mainBannerImages)} className="app__admin__btn app__admin__btn--primary">
                      Зберегти
                    </button>
                    <button onClick={() => handleCancel(() => { if (initialMainBanner) setMainBannerImages([...initialMainBanner]); })} className="app__admin__btn app__admin__btn--cancel">
                      Скасувати
                    </button>
                  </div>
                </div>
              )}

              {/* 4. TECH BANNER TAB */}
              {activeTab === 'techBanner' && (
                <div className="app__admin__card">
                  <h1 className="app__admin__section-title">Керування технічним банером (каруселлю цін)</h1>
                  <p style={{ marginBottom: '20px', fontSize: '14px', color: 'rgb(125, 143, 116)' }}>
                    Керуйте зображеннями каруселі в секції цін та технічної документації.
                  </p>
                  <ImageManager
                    label='Зображення технічного банера / галереї цін'
                    images={techBannerImages}
                    onImagesChange={(newImgs) => setTechBannerImages(newImgs)}
                    projectId='prices-banner'
                    type='carousel'
                  />
                  <div className="app__admin__button-row">
                    <button onClick={() => saveContent('techBanner', techBannerImages)} className="app__admin__btn app__admin__btn--primary">
                      Зберегти
                    </button>
                    <button onClick={() => handleCancel(() => { if (initialTechBanner) setTechBannerImages([...initialTechBanner]); })} className="app__admin__btn app__admin__btn--cancel">
                      Скасувати
                    </button>
                  </div>
                </div>
              )}

              {/* 5. ABOUT TAB */}
              {activeTab === 'about' && (
                <div className="app__admin__card">
                  <h1 className="app__admin__section-title">Керування розділом "Про мене"</h1>
                  <form onSubmit={(e) => { e.preventDefault(); saveContent('about', aboutData); }} className="app__admin__form">
                    <div className="app__admin__input-group">
                      <label className="app__admin__label">Заголовок розділу (напр. ПРО МЕНЕ:)</label>
                      <FontStyleEditor
                        styleConfig={aboutData.titleStyle}
                        onChange={(style) => setAboutData({ ...aboutData, titleStyle: style })}
                      />
                      <input
                        type='text'
                        value={aboutData.title}
                        onChange={(e) => setAboutData({ ...aboutData, title: e.target.value })}
                        className="app__admin__input"
                        required
                      />
                    </div>

                    <div className="app__admin__input-group">
                      <label className="app__admin__label">Текст (абзаци розділяйте порожнім рядком / Enter)</label>
                      <FontStyleEditor
                        styleConfig={aboutData.textStyle}
                        onChange={(style) => setAboutData({ ...aboutData, textStyle: style })}
                      />
                      <textarea
                        value={aboutData.text}
                        onChange={(e) => setAboutData({ ...aboutData, text: e.target.value })}
                        className="app__admin__input"
                        style={{ minHeight: '200px', resize: 'vertical' }}
                        required
                      />
                    </div>

                    <ImageManager
                      label='Зображення дизайнера (максимум 1 зображення)'
                      images={aboutData.photo ? [aboutData.photo] : []}
                      onImagesChange={(newImgs) => setAboutData({ ...aboutData, photo: newImgs[0] || '' })}
                      projectId='about'
                      type='photo'
                      maxImages={1}
                    />

                    <div className="app__admin__input-group">
                      <label className="app__admin__label">Номер телефону</label>
                      <input
                        type='text'
                        value={aboutData.phone || ''}
                        onChange={(e) => setAboutData({ ...aboutData, phone: e.target.value })}
                        className="app__admin__input"
                        placeholder="Введіть номер телефону"
                        required
                      />
                    </div>

                    <div className="app__admin__input-group">
                      <label className="app__admin__label">Viber</label>
                      <input
                        type='text'
                        value={aboutData.viber || ''}
                        onChange={(e) => setAboutData({ ...aboutData, viber: e.target.value })}
                        className="app__admin__input"
                        placeholder="Введіть номер телефону"
                        required
                      />
                    </div>

                    <div className="app__admin__input-group">
                      <label className="app__admin__label">Telegram</label>
                      <input
                        type='text'
                        value={aboutData.telegram || ''}
                        onChange={(e) => setAboutData({ ...aboutData, telegram: e.target.value })}
                        className="app__admin__input"
                        placeholder="Введіть посилання"
                        required
                      />
                    </div>

                    <div className="app__admin__input-group">
                      <label className="app__admin__label">Email</label>
                      <input
                        type='email'
                        value={aboutData.email || ''}
                        onChange={(e) => setAboutData({ ...aboutData, email: e.target.value })}
                        className="app__admin__input"
                        placeholder="Введіть пошту"
                        required
                      />
                    </div>

                    <div className="app__admin__button-row">
                      <button type='submit' className="app__admin__btn app__admin__btn--primary">
                        Зберегти
                      </button>
                      <button type='button' onClick={() => handleCancel(() => { if (initialAboutData) setAboutData({ ...initialAboutData }); })} className="app__admin__btn app__admin__btn--cancel">
                        Скасувати
                      </button>
                    </div>
                  </form>
                </div>
              )}

              {/* 6. DESIGN PROJECT TAB */}
              {activeTab === 'designProject' && (
                <div className="app__admin__card">
                  <h1 className="app__admin__section-title">Керування послугою "Дизайн проєкт"</h1>
                  <form onSubmit={(e) => { e.preventDefault(); saveContent('designProject', designProjectData); }} className="app__admin__form">
                    <div className="app__admin__input-group">
                      <label className="app__admin__label">Заголовок послуги</label>
                      <FontStyleEditor
                        styleConfig={designProjectData.titleStyle}
                        onChange={(style) => setDesignProjectData({ ...designProjectData, titleStyle: style })}
                      />
                      <input
                        type='text'
                        value={designProjectData.title}
                        onChange={(e) => setDesignProjectData({ ...designProjectData, title: e.target.value })}
                        className="app__admin__input"
                        required
                      />
                    </div>

                    <div className="app__admin__input-group">
                      <label className="app__admin__label">Етапи проєкту</label>
                      <FontStyleEditor
                        styleConfig={designProjectData.stepStyle}
                        onChange={(style) => setDesignProjectData({ ...designProjectData, stepStyle: style })}
                      />
                      {designProjectData.steps.map((step, index) => (
                        <div key={index} className="app__admin__step-item">
                          <span className="app__admin__step-item-number">
                            {String(index + 1).padStart(2, '0')}
                          </span>
                          <textarea
                            value={step}
                            onChange={(e) => {
                              const newSteps = [...designProjectData.steps];
                              newSteps[index] = e.target.value;
                              setDesignProjectData({ ...designProjectData, steps: newSteps });
                            }}
                            className="app__admin__input"
                            style={{ minHeight: '60px', resize: 'vertical', flex: 1 }}
                            required
                          />
                          <button
                            type="button"
                            onClick={() => {
                              const newSteps = designProjectData.steps.filter((_, i) => i !== index);
                              setDesignProjectData({ ...designProjectData, steps: newSteps });
                            }}
                            className="app__admin__btn--remove-step"
                          >
                            ×
                          </button>
                        </div>
                      ))}
                      <button
                        type="button"
                        onClick={() => {
                          setDesignProjectData({ ...designProjectData, steps: [...designProjectData.steps, ''] });
                        }}
                        className="app__admin__btn app__admin__btn--add-step"
                      >
                        + Додати етап
                      </button>
                    </div>

                    <ImageManager
                      label='Зображення дизайну проєкту'
                      images={[designProjectData.image]}
                      onImagesChange={(newImgs) => setDesignProjectData({ ...designProjectData, image: newImgs[0] || '' })}
                      projectId='prices-banner'
                      type='design'
                      maxImages={1}
                    />

                    <div className="app__admin__button-row">
                      <button type='submit' className="app__admin__btn app__admin__btn--primary">
                        Зберегти
                      </button>
                      <button type='button' onClick={() => handleCancel(() => { if (initialDesignProjectData) setDesignProjectData({ ...initialDesignProjectData }); })} className="app__admin__btn app__admin__btn--cancel">
                        Скасувати
                      </button>
                    </div>
                  </form>
                </div>
              )}

              {/* 7. TECH PROJECT TAB */}
              {activeTab === 'techProject' && (
                <div className="app__admin__card">
                  <h1 className="app__admin__section-title">Керування послугою "Технічний проєкт"</h1>
                  <form onSubmit={(e) => { e.preventDefault(); saveContent('techProject', techProjectData); }} className="app__admin__form">
                    <div className="app__admin__input-group">
                      <label className="app__admin__label">Заголовок послуги</label>
                      <FontStyleEditor
                        styleConfig={techProjectData.titleStyle}
                        onChange={(style) => setTechProjectData({ ...techProjectData, titleStyle: style })}
                      />
                      <input
                        type='text'
                        value={techProjectData.title}
                        onChange={(e) => setTechProjectData({ ...techProjectData, title: e.target.value })}
                        className="app__admin__input"
                        required
                      />
                    </div>

                    <div className="app__admin__input-group">
                      <label className="app__admin__label">Етапи проєкту</label>
                      <FontStyleEditor
                        styleConfig={techProjectData.stepStyle}
                        onChange={(style) => setTechProjectData({ ...techProjectData, stepStyle: style })}
                      />
                      {techProjectData.steps.map((step, index) => (
                        <div key={index} className="app__admin__step-item">
                          <span className="app__admin__step-item-number">
                            {String(index + 1).padStart(2, '0')}
                          </span>
                          <textarea
                            value={step}
                            onChange={(e) => {
                              const newSteps = [...techProjectData.steps];
                              newSteps[index] = e.target.value;
                              setTechProjectData({ ...techProjectData, steps: newSteps });
                            }}
                            className="app__admin__input"
                            style={{ minHeight: '60px', resize: 'vertical', flex: 1 }}
                            required
                          />
                          <button
                            type="button"
                            onClick={() => {
                              const newSteps = techProjectData.steps.filter((_, i) => i !== index);
                              setTechProjectData({ ...techProjectData, steps: newSteps });
                            }}
                            className="app__admin__btn--remove-step"
                          >
                            ×
                          </button>
                        </div>
                      ))}
                      <button
                        type="button"
                        onClick={() => {
                          setTechProjectData({ ...techProjectData, steps: [...techProjectData.steps, ''] });
                        }}
                        className="app__admin__btn app__admin__btn--add-step"
                      >
                        + Додати етап
                      </button>
                    </div>

                    <ImageManager
                      label='Зображення технічного проєкту'
                      images={[techProjectData.image]}
                      onImagesChange={(newImgs) => setTechProjectData({ ...techProjectData, image: newImgs[0] || '' })}
                      projectId='prices-banner'
                      type='tech'
                      maxImages={1}
                    />

                    <div className="app__admin__button-row">
                      <button type='submit' className="app__admin__btn app__admin__btn--primary">
                        Зберегти
                      </button>
                      <button type='button' onClick={() => handleCancel(() => { if (initialTechProjectData) setTechProjectData({ ...initialTechProjectData }); })} className="app__admin__btn app__admin__btn--cancel">
                        Скасувати
                      </button>
                    </div>
                  </form>
                </div>
              )}

              {/* 8. AUTHOR SUPERVISION TAB */}
              {activeTab === 'authorSupervision' && (
                <div className="app__admin__card">
                  <h1 className="app__admin__section-title">Керування послугою "Дизайнерський нагляд"</h1>
                  <form onSubmit={(e) => { e.preventDefault(); saveContent('authorSupervision', authorSupervisionData); }} className="app__admin__form">
                    <div className="app__admin__input-group">
                      <label className="app__admin__label">Заголовок послуги</label>
                      <FontStyleEditor
                        styleConfig={authorSupervisionData.titleStyle}
                        onChange={(style) => setAuthorSupervisionData({ ...authorSupervisionData, titleStyle: style })}
                      />
                      <input
                        type='text'
                        value={authorSupervisionData.title}
                        onChange={(e) => setAuthorSupervisionData({ ...authorSupervisionData, title: e.target.value })}
                        className="app__admin__input"
                        required
                      />
                    </div>

                    <div className="app__admin__input-group">
                      <label className="app__admin__label">Опис послуги</label>
                      <FontStyleEditor
                        styleConfig={authorSupervisionData.descStyle}
                        onChange={(style) => setAuthorSupervisionData({ ...authorSupervisionData, descStyle: style })}
                      />
                      <textarea
                        value={authorSupervisionData.description}
                        onChange={(e) => setAuthorSupervisionData({ ...authorSupervisionData, description: e.target.value })}
                        className="app__admin__input"
                        style={{ minHeight: '100px' }}
                        required
                      />
                    </div>

                    <div className="app__admin__button-row">
                      <button type='submit' className="app__admin__btn app__admin__btn--primary">
                        Зберегти
                      </button>
                      <button type='button' onClick={() => handleCancel(() => { if (initialAuthorSupervisionData) setAuthorSupervisionData({ ...initialAuthorSupervisionData }); })} className="app__admin__btn app__admin__btn--cancel">
                        Скасувати
                      </button>
                    </div>
                  </form>
                </div>
              )}
            </>
          )}
        </main>

        {modalState.isOpen && (
          <div className="app__admin__modal-overlay">
            <div className="app__admin__modal-card">
              <h3 className="app__admin__modal-title" style={{ color: modalState.type === 'error' ? '#dc3545' : undefined }}>
                {modalState.title}
              </h3>
              <p className="app__admin__modal-text">{modalState.message}</p>
              <button onClick={closeModal} className="app__admin__btn app__admin__btn--primary">
                OK
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}


