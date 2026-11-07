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
    <div style={{ marginBottom: '20px', border: `1px solid ${colors.sandy}`, borderRadius: '8px', overflow: 'hidden', backgroundColor: '#fff' }}>
      <div
        onClick={() => setIsOpen(!isOpen)}
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '12px 16px',
          backgroundColor: 'rgba(125, 143, 116, 0.08)',
          cursor: 'pointer',
          userSelect: 'none',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span style={{ ...styles.label, cursor: 'pointer', marginBottom: 0, fontWeight: '700', color: 'rgb(125, 143, 116)' }}>{label}</span>
          <span style={{ backgroundColor: colors.swampy, color: '#fff', padding: '2px 8px', borderRadius: '10px', fontSize: '11px', fontWeight: '600' }}>
            {safeImages.length} зображення {maxImages === 1 ? '(макс. 1)' : ''}
          </span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <span style={{ fontSize: '12px', fontWeight: '600', color: 'rgb(125, 143, 116)' }}>
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
              color: 'rgb(125, 143, 116)',
            }}
          >
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </div>
      </div>

      <div
        style={{
          maxHeight: isOpen ? '2000px' : '0px',
          opacity: isOpen ? 1 : 0,
          overflow: 'hidden',
          transition: 'max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s ease, padding 0.3s ease',
          padding: isOpen ? '16px' : '0 16px',
        }}
      >
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))', gap: '10px' }}>
          {safeImages.map((url, index) => (
            <div key={index} style={{ position: 'relative', aspectRatio: '1/1', border: `1px solid ${colors.sandy}`, borderRadius: '4px', overflow: 'hidden', backgroundColor: '#fff' }}>
              <img src={url} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <button
                type="button"
                onClick={() => removeImage(index)}
                style={{ position: 'absolute', top: '4px', right: '4px', width: '28px', height: '28px', borderRadius: '50%', backgroundColor: 'rgba(125, 143, 116, 0.75)', color: '#fff', border: 'none', cursor: 'pointer', fontSize: '22px', lineHeight: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 10 }}
              >
                ×
              </button>
              {maxImages !== 1 && (
                <div style={{ position: 'absolute', bottom: '4px', left: 0, right: 0, display: 'flex', justifyContent: 'center', gap: '6px', padding: '0 6px' }}>
                  <button
                    type="button"
                    onClick={() => moveImage(index, -1)}
                    disabled={index === 0}
                    style={{ backgroundColor: colors.swampy, color: '#fff', border: 'none', borderRadius: '3px', padding: '2px 8px', fontSize: '15px', lineHeight: 1, cursor: index === 0 ? 'default' : 'pointer', opacity: index === 0 ? 0.4 : 0.9 }}
                  >
                    ←
                  </button>
                  <button
                    type="button"
                    onClick={() => moveImage(index, 1)}
                    disabled={index === safeImages.length - 1}
                    style={{ backgroundColor: colors.swampy, color: '#fff', border: 'none', borderRadius: '3px', padding: '2px 8px', fontSize: '15px', lineHeight: 1, cursor: index === safeImages.length - 1 ? 'default' : 'pointer', opacity: index === safeImages.length - 1 ? 0.4 : 0.9 }}
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
              style={{
                aspectRatio: '1/1',
                border: `2px dashed ${colors.sandy}`,
                borderRadius: '4px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: uploading ? 'default' : 'pointer',
                backgroundColor: uploading ? '#f5f5f5' : 'transparent',
                color: colors.swampy,
              }}
            >
              <span style={{ fontSize: '24px', fontWeight: 'bold' }}>{uploading ? '...' : '+'}</span>
              <span style={{ fontSize: '10px' }}>{uploading ? 'Завантаження' : 'Додати'}</span>
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
  const [loginError, setLoginError] = useState('');
  const [loginLoading, setLoginLoading] = useState(false);

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
  const [mainBannerImages, setMainBannerImages] = useState([]);
  const [initialMainBanner, setInitialMainBanner] = useState([]);

  const [techBannerImages, setTechBannerImages] = useState([]);
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
    email: 'arinakozlovsla@gmail.com',
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
      fetchContent('mainBanner', setMainBannerImages, setInitialMainBanner, []),
      fetchContent('techBanner', setTechBannerImages, setInitialTechBanner, []),
      fetchContent('about', setAboutData, setInitialAboutData, {
        title: 'ПРО МЕНЕ:',
        text: 'Проєктування просторів для життя - захоплююча, надихаюча робота. Ціную кожен етап в процесі створення дизайн проєкту від планувальних креслень до реалізації ідей. Маю освіту дизайнера інтер’єру у Львівській національній академії мистецтв і два роки досвіду по професії.\n\nМоя мета - забезпечити клієнтам гармонійний простір, який відповідає їхнім потребам і стилю життя. Завжди прагну втілити ідеї та концепції, які створюють грамотні ергономічні рішення, використовую поєднання природних кольорів. Будь-який проєкт, незалежний від його розміру чи складності, розробляється з увагою до кожної деталі. Під час роботи завжди на зв’язку, щоб зробити процес створення максимально зручним та приємним для моїх клієнтів.',
        photo: '/assets/images/about/person.png',
        titleStyle: null,
        textStyle: null,
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
        <div style={styles.loginContainer}>
          <div style={styles.loginCard}>
            <h1 style={styles.loginTitle}>Адмін-панель</h1>
            <p style={styles.loginSubtitle}>Введіть облікові дані для входу</p>

            {loginError && <div style={styles.error}>{loginError}</div>}

            <form onSubmit={handleLogin} style={styles.form}>
              <div style={styles.inputGroup}>
                <label style={styles.label}>Логін</label>
                <input
                  type='text'
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  style={styles.input}
                  placeholder='Введіть логін'
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
                  placeholder='Введіть пароль'
                  required
                />
              </div>

              <button type='submit' style={styles.primaryBtn} disabled={loginLoading}>
                {loginLoading ? 'Вхід...' : 'Увійти'}
              </button>
            </form>

            <div style={styles.backLink}>
              <a href='/' style={styles.link}>← На головний сайт</a>
            </div>
          </div>
        </div>
      </>
    );
  }

  const drawerWidth = isCollapsed ? '88px' : '280px';

  return (
    <>
      <Head>
        <title>Адмін-панель | Аріна Козловська</title>
      </Head>
      <div style={styles.layoutContainer}>
        {/* Drawer Sidebar */}
        <aside style={{ ...styles.drawer, width: drawerWidth }}>
          <div style={styles.drawerHeader}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
              {!isCollapsed && <h2 style={styles.drawerTitle}>Адмін-панель</h2>}
              <button
                onClick={() => setIsCollapsed(!isCollapsed)}
                style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'rgb(125, 143, 116)', padding: '4px', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
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
                    color: 'rgb(125, 143, 116)',
                  }}
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>
            </div>
            {!isCollapsed && <span style={styles.userBadge}>Arina-admin</span>}
          </div>

          <nav style={styles.drawerNav}>
            <button
              onClick={() => setActiveTab('projects')}
              style={{ ...styles.drawerItem, ...(activeTab === 'projects' ? styles.drawerItemActive : {}) }}
              title="Проєкти"
            >
              <svg width="32" height="32" viewBox="0 0 24 24" fill={activeTab === 'projects' ? '#fff' : 'rgb(125, 143, 116)'} style={{ flexShrink: 0 }}>
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
              </svg>
              {!isCollapsed && <span style={styles.drawerItemText}>Проєкти</span>}
            </button>
            <button
              onClick={() => setActiveTab('prices')}
              style={{ ...styles.drawerItem, ...(activeTab === 'prices' ? styles.drawerItemActive : {}) }}
              title="Ціни"
            >
              <svg width="32" height="32" viewBox="0 0 24 24" fill={activeTab === 'prices' ? '#fff' : 'rgb(125, 143, 116)'} style={{ flexShrink: 0 }}>
                <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/>
              </svg>
              {!isCollapsed && <span style={styles.drawerItemText}>Ціни</span>}
            </button>
            <button
              onClick={() => setActiveTab('mainBanner')}
              style={{ ...styles.drawerItem, ...(activeTab === 'mainBanner' ? styles.drawerItemActive : {}) }}
              title="Головний банер"
            >
              <svg width="32" height="32" viewBox="0 0 24 24" fill={activeTab === 'mainBanner' ? '#fff' : 'rgb(125, 143, 116)'} style={{ flexShrink: 0 }}>
                <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/>
              </svg>
              {!isCollapsed && <span style={styles.drawerItemText}>Головний банер</span>}
            </button>
            <button
              onClick={() => setActiveTab('techBanner')}
              style={{ ...styles.drawerItem, ...(activeTab === 'techBanner' ? styles.drawerItemActive : {}) }}
              title="Технічний банер"
            >
              <svg width="32" height="32" viewBox="0 0 24 24" fill={activeTab === 'techBanner' ? '#fff' : 'rgb(125, 143, 116)'} style={{ flexShrink: 0 }}>
                <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"/>
              </svg>
              {!isCollapsed && <span style={styles.drawerItemText}>Технічний банер</span>}
            </button>
            <button
              onClick={() => setActiveTab('about')}
              style={{ ...styles.drawerItem, ...(activeTab === 'about' ? styles.drawerItemActive : {}) }}
              title="Про мене"
            >
              <svg width="32" height="32" viewBox="0 0 24 24" fill={activeTab === 'about' ? '#fff' : 'rgb(125, 143, 116)'} style={{ flexShrink: 0 }}>
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
              </svg>
              {!isCollapsed && <span style={styles.drawerItemText}>Про мене</span>}
            </button>
            <button
              onClick={() => setActiveTab('designProject')}
              style={{ ...styles.drawerItem, ...(activeTab === 'designProject' ? styles.drawerItemActive : {}) }}
              title="Дизайн проєкт"
            >
              <svg width="32" height="32" viewBox="0 0 24 24" fill={activeTab === 'designProject' ? '#fff' : 'rgb(125, 143, 116)'} style={{ flexShrink: 0 }}>
                <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM19 18H6c-2.21 0-4-1.79-4-4 0-2.05 1.53-3.76 3.56-3.97l1.07-.11.5-.95C8.08 7.14 9.94 6 12 6c2.62 0 4.88 1.86 5.39 4.43l.3 1.5 1.53.11c1.56.1 2.78 1.41 2.78 2.96 0 1.65-1.35 3-3 3z"/>
              </svg>
              {!isCollapsed && <span style={styles.drawerItemText}>Дизайн проєкт</span>}
            </button>
            <button
              onClick={() => setActiveTab('techProject')}
              style={{ ...styles.drawerItem, ...(activeTab === 'techProject' ? styles.drawerItemActive : {}) }}
              title="Технічний проєкт"
            >
              <svg width="32" height="32" viewBox="0 0 24 24" fill={activeTab === 'techProject' ? '#fff' : 'rgb(125, 143, 116)'} style={{ flexShrink: 0 }}>
                <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>
              </svg>
              {!isCollapsed && <span style={styles.drawerItemText}>Технічний проєкт</span>}
            </button>
            <button
              onClick={() => setActiveTab('authorSupervision')}
              style={{ ...styles.drawerItem, ...(activeTab === 'authorSupervision' ? styles.drawerItemActive : {}) }}
              title="Дизайнерський нагляд"
            >
              <svg width="32" height="32" viewBox="0 0 24 24" fill={activeTab === 'authorSupervision' ? '#fff' : 'rgb(125, 143, 116)'} style={{ flexShrink: 0 }}>
                <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
              </svg>
              {!isCollapsed && <span style={styles.drawerItemText}>Дизайнерський нагляд</span>}
            </button>

            {!isCollapsed && (
              <a
                href='/'
                target='_blank'
                style={{
                  ...styles.siteLink,
                  borderTop: `1px solid ${colors.sandy}`,
                  paddingTop: '12px',
                  marginTop: '4px',
                }}
              >
                Переглянути сайт ↗
              </a>
            )}
            <button onClick={handleLogout} style={styles.logoutBtn} title="Вийти">
              {isCollapsed ? '⎋' : 'Вийти'}
            </button>
          </nav>
        </aside>

        {/* Main Content Area */}
        <main style={{ ...styles.mainContent, maxWidth: `calc(100vw - ${drawerWidth})` }}>
          {loading ? (
            <p style={styles.loadingText}>Завантаження даних...</p>
          ) : (
            <>
              {/* 1. PROJECTS TAB */}
              {activeTab === 'projects' && (
                <div>
                  <h1 style={styles.sectionTitle}>Керування проєктами</h1>
                  <div style={styles.grid}>
                    <div style={styles.card}>
                      <h2 style={styles.cardTitle}>
                        {isEditing ? `Редагувати проєкт: ${currentId}` : 'Додати новий проєкт'}
                      </h2>
                      <form onSubmit={handleProjectSubmit} style={styles.form}>
                        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: '12px 14px', backgroundColor: 'rgba(125, 143, 116, 0.1)', borderRadius: '6px', border: `1px solid ${colors.sandy}` }}>
                          <label style={{ ...styles.label, marginBottom: 0, fontSize: '14px' }}>Показувати вкладку "Реалізація"</label>
                          <div
                            onClick={() => setFormData({ ...formData, showRealization: !formData.showRealization })}
                            style={{
                              width: '46px',
                              height: '24px',
                              backgroundColor: formData.showRealization ? colors.swampy : colors.gray,
                              borderRadius: '12px',
                              position: 'relative',
                              cursor: 'pointer',
                              transition: 'background-color 0.2s',
                              flexShrink: 0,
                            }}
                          >
                            <div
                              style={{
                                width: '20px',
                                height: '20px',
                                backgroundColor: '#fff',
                                borderRadius: '50%',
                                position: 'absolute',
                                top: '2px',
                                left: formData.showRealization ? '24px' : '2px',
                                transition: 'left 0.2s',
                                boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
                              }}
                            />
                          </div>
                        </div>

                        <div style={styles.inputGroup}>
                          <label style={styles.label}>ID проєкту (напр. project9)</label>
                          <input
                            type='text'
                            value={formData.id}
                            onChange={(e) => setFormData({ ...formData, id: e.target.value })}
                            style={styles.input}
                            placeholder='Введіть унікальний ID (напр. project6)'
                            required
                            disabled={isEditing}
                          />
                        </div>

                        <div style={styles.inputGroup}>
                          <label style={styles.label}>Порядковий номер (orderNumber)</label>
                          <input
                            type='number'
                            value={formData.orderNumber}
                            onChange={(e) => setFormData({ ...formData, orderNumber: e.target.value })}
                            style={styles.input}
                            placeholder='Введіть число (напр. 1)'
                            required
                          />
                        </div>

                        <div style={styles.inputGroup}>
                          <label style={styles.label}>Опис об'єкта</label>
                          <input
                            type='text'
                            value={formData.description}
                            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                            style={styles.input}
                            placeholder='Введіть опис об’єкта'
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

                        <div style={styles.buttonRow}>
                          <button type='submit' style={styles.primaryBtn}>
                            Зберегти
                          </button>
                          <button type='button' onClick={() => { handleOpenCreate(); handleCancel(fetchProjects); }} style={styles.cancelBtn}>
                            Скасувати
                          </button>
                        </div>
                      </form>
                    </div>

                    <div style={styles.card}>
                      <h2 style={styles.cardTitle}>Список проєктів ({projects.length})</h2>
                      {projects.length === 0 ? (
                        <p style={styles.loadingText}>Проєктів поки немає.</p>
                      ) : (
                        <div style={styles.projectList}>
                          {projects.map((p) => (
                            <div key={p.id} style={styles.projectItem}>
                              <div>
                                <span style={{ backgroundColor: colors.swampy, color: '#fff', padding: '2px 6px', borderRadius: '4px', fontSize: '11px', marginRight: '8px', fontWeight: '600' }}>
                                  №{p.orderNumber ?? 0}
                                </span>
                                <strong style={{ color: 'rgb(125, 143, 116)' }}>{p.id}</strong> — {p.description} ({p.area})
                              </div>
                              <div style={styles.itemActions}>
                                <button onClick={() => handleOpenEdit(p)} style={styles.editBtn}>Редагувати</button>
                                <button onClick={() => handleDeleteProject(p.id)} style={styles.deleteBtn}>Видалити</button>
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
                <div style={styles.card}>
                  <h1 style={styles.sectionTitle}>Керування цінами</h1>
                  <form onSubmit={handlePriceSubmit} style={styles.form}>
                    <div style={styles.inputGroup}>
                      <label style={styles.label}>Дизайн проєкт (напр. 20 $ кв.м.)</label>
                      <FontStyleEditor
                        styleConfig={priceData.designPriceStyle}
                        onChange={(style) => setPriceData({ ...priceData, designPriceStyle: style })}
                      />
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
                      <FontStyleEditor
                        styleConfig={priceData.techPriceStyle}
                        onChange={(style) => setPriceData({ ...priceData, techPriceStyle: style })}
                      />
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
                      <FontStyleEditor
                        styleConfig={priceData.authorPriceStyle}
                        onChange={(style) => setPriceData({ ...priceData, authorPriceStyle: style })}
                      />
                      <input
                        type='text'
                        value={priceData.authorSupervision}
                        onChange={(e) => setPriceData({ ...priceData, authorSupervision: e.target.value })}
                        style={styles.input}
                        required
                      />
                    </div>

                    <div style={styles.buttonRow}>
                      <button type='submit' style={styles.primaryBtn}>
                        Зберегти
                      </button>
                      <button type='button' onClick={() => handleCancel(() => { if (initialPriceData) setPriceData({ ...initialPriceData }); })} style={styles.cancelBtn}>
                        Скасувати
                      </button>
                    </div>
                  </form>
                </div>
              )}

              {/* 3. MAIN BANNER TAB */}
              {activeTab === 'mainBanner' && (
                <div style={styles.card}>
                  <h1 style={styles.sectionTitle}>Керування головним банером (каруселлю)</h1>
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
                  <div style={styles.buttonRow}>
                    <button onClick={() => saveContent('mainBanner', mainBannerImages)} style={styles.primaryBtn}>
                      Зберегти
                    </button>
                    <button onClick={() => handleCancel(() => { if (initialMainBanner) setMainBannerImages([...initialMainBanner]); })} style={styles.cancelBtn}>
                      Скасувати
                    </button>
                  </div>
                </div>
              )}

              {/* 4. TECH BANNER TAB */}
              {activeTab === 'techBanner' && (
                <div style={styles.card}>
                  <h1 style={styles.sectionTitle}>Керування технічним банером (каруселлю цін)</h1>
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
                  <div style={styles.buttonRow}>
                    <button onClick={() => saveContent('techBanner', techBannerImages)} style={styles.primaryBtn}>
                      Зберегти
                    </button>
                    <button onClick={() => handleCancel(() => { if (initialTechBanner) setTechBannerImages([...initialTechBanner]); })} style={styles.cancelBtn}>
                      Скасувати
                    </button>
                  </div>
                </div>
              )}

              {/* 5. ABOUT TAB */}
              {activeTab === 'about' && (
                <div style={styles.card}>
                  <h1 style={styles.sectionTitle}>Керування розділом "Про мене"</h1>
                  <form onSubmit={(e) => { e.preventDefault(); saveContent('about', aboutData); }} style={styles.form}>
                    <div style={styles.inputGroup}>
                      <label style={styles.label}>Заголовок розділу (напр. ПРО МЕНЕ:)</label>
                      <FontStyleEditor
                        styleConfig={aboutData.titleStyle}
                        onChange={(style) => setAboutData({ ...aboutData, titleStyle: style })}
                      />
                      <input
                        type='text'
                        value={aboutData.title}
                        onChange={(e) => setAboutData({ ...aboutData, title: e.target.value })}
                        style={styles.input}
                        required
                      />
                    </div>

                    <div style={styles.inputGroup}>
                      <label style={styles.label}>Текст (абзаци розділяйте порожнім рядком / Enter)</label>
                      <FontStyleEditor
                        styleConfig={aboutData.textStyle}
                        onChange={(style) => setAboutData({ ...aboutData, textStyle: style })}
                      />
                      <textarea
                        value={aboutData.text}
                        onChange={(e) => setAboutData({ ...aboutData, text: e.target.value })}
                        style={{ ...styles.input, color: '#000', minHeight: '200px', resize: 'vertical' }}
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

                    <div style={styles.inputGroup}>
                      <label style={styles.label}>Номер телефону</label>
                      <input
                        type='text'
                        value={aboutData.phone || ''}
                        onChange={(e) => setAboutData({ ...aboutData, phone: e.target.value })}
                        style={styles.input}
                        placeholder="+380978159804"
                        required
                      />
                    </div>

                    <div style={styles.inputGroup}>
                      <label style={styles.label}>Viber</label>
                      <input
                        type='text'
                        value={aboutData.viber || ''}
                        onChange={(e) => setAboutData({ ...aboutData, viber: e.target.value })}
                        style={styles.input}
                        placeholder="+380978159804"
                        required
                      />
                    </div>

                    <div style={styles.inputGroup}>
                      <label style={styles.label}>Telegram</label>
                      <input
                        type='text'
                        value={aboutData.telegram || ''}
                        onChange={(e) => setAboutData({ ...aboutData, telegram: e.target.value })}
                        style={styles.input}
                        placeholder="+380978159804 або t.me/..."
                        required
                      />
                    </div>

                    <div style={styles.inputGroup}>
                      <label style={styles.label}>Email</label>
                      <input
                        type='email'
                        value={aboutData.email || ''}
                        onChange={(e) => setAboutData({ ...aboutData, email: e.target.value })}
                        style={styles.input}
                        placeholder="arinakozlovska@gmail.com"
                        required
                      />
                    </div>

                    <div style={styles.buttonRow}>
                      <button type='submit' style={styles.primaryBtn}>
                        Зберегти
                      </button>
                      <button type='button' onClick={() => handleCancel(() => { if (initialAboutData) setAboutData({ ...initialAboutData }); })} style={styles.cancelBtn}>
                        Скасувати
                      </button>
                    </div>
                  </form>
                </div>
              )}

              {/* 6. DESIGN PROJECT TAB */}
              {activeTab === 'designProject' && (
                <div style={styles.card}>
                  <h1 style={styles.sectionTitle}>Керування послугою "Дизайн проєкт"</h1>
                  <form onSubmit={(e) => { e.preventDefault(); saveContent('designProject', designProjectData); }} style={styles.form}>
                    <div style={styles.inputGroup}>
                      <label style={styles.label}>Заголовок послуги</label>
                      <FontStyleEditor
                        styleConfig={designProjectData.titleStyle}
                        onChange={(style) => setDesignProjectData({ ...designProjectData, titleStyle: style })}
                      />
                      <input
                        type='text'
                        value={designProjectData.title}
                        onChange={(e) => setDesignProjectData({ ...designProjectData, title: e.target.value })}
                        style={styles.input}
                        required
                      />
                    </div>

                    <div style={styles.inputGroup}>
                      <label style={styles.label}>Етапи проєкту</label>
                      <FontStyleEditor
                        styleConfig={designProjectData.stepStyle}
                        onChange={(style) => setDesignProjectData({ ...designProjectData, stepStyle: style })}
                      />
                      {designProjectData.steps.map((step, index) => (
                        <div key={index} style={{ display: 'flex', gap: '10px', alignItems: 'center', marginBottom: '8px' }}>
                          <span style={{ fontWeight: '700', minWidth: '30px', color: colors.swampy }}>
                            {String(index + 1).padStart(2, '0')}
                          </span>
                          <textarea
                            value={step}
                            onChange={(e) => {
                              const newSteps = [...designProjectData.steps];
                              newSteps[index] = e.target.value;
                              setDesignProjectData({ ...designProjectData, steps: newSteps });
                            }}
                            style={{ ...styles.input, color: '#000', minHeight: '60px', resize: 'vertical', flex: 1 }}
                            required
                          />
                          <button
                            type="button"
                            onClick={() => {
                              const newSteps = designProjectData.steps.filter((_, i) => i !== index);
                              setDesignProjectData({ ...designProjectData, steps: newSteps });
                            }}
                            style={{ background: 'none', border: 'none', color: 'rgb(125, 143, 116)', fontSize: '36px', cursor: 'pointer', fontWeight: 'bold', lineHeight: 1, padding: '0 8px' }}
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
                        style={{ backgroundColor: colors.swampy, color: '#fff', border: 'none', padding: '8px 14px', borderRadius: '6px', cursor: 'pointer', fontWeight: '600', fontSize: '13px', alignSelf: 'flex-start', marginTop: '6px' }}
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

                    <div style={styles.buttonRow}>
                      <button type='submit' style={styles.primaryBtn}>
                        Зберегти
                      </button>
                      <button type='button' onClick={() => handleCancel(() => { if (initialDesignProjectData) setDesignProjectData({ ...initialDesignProjectData }); })} style={styles.cancelBtn}>
                        Скасувати
                      </button>
                    </div>
                  </form>
                </div>
              )}

              {/* 7. TECH PROJECT TAB */}
              {activeTab === 'techProject' && (
                <div style={styles.card}>
                  <h1 style={styles.sectionTitle}>Керування послугою "Технічний проєкт"</h1>
                  <form onSubmit={(e) => { e.preventDefault(); saveContent('techProject', techProjectData); }} style={styles.form}>
                    <div style={styles.inputGroup}>
                      <label style={styles.label}>Заголовок послуги</label>
                      <FontStyleEditor
                        styleConfig={techProjectData.titleStyle}
                        onChange={(style) => setTechProjectData({ ...techProjectData, titleStyle: style })}
                      />
                      <input
                        type='text'
                        value={techProjectData.title}
                        onChange={(e) => setTechProjectData({ ...techProjectData, title: e.target.value })}
                        style={styles.input}
                        required
                      />
                    </div>

                    <div style={styles.inputGroup}>
                      <label style={styles.label}>Етапи проєкту</label>
                      <FontStyleEditor
                        styleConfig={techProjectData.stepStyle}
                        onChange={(style) => setTechProjectData({ ...techProjectData, stepStyle: style })}
                      />
                      {techProjectData.steps.map((step, index) => (
                        <div key={index} style={{ display: 'flex', gap: '10px', alignItems: 'center', marginBottom: '8px' }}>
                          <span style={{ fontWeight: '700', minWidth: '30px', color: colors.swampy }}>
                            {String(index + 1).padStart(2, '0')}
                          </span>
                          <textarea
                            value={step}
                            onChange={(e) => {
                              const newSteps = [...techProjectData.steps];
                              newSteps[index] = e.target.value;
                              setTechProjectData({ ...techProjectData, steps: newSteps });
                            }}
                            style={{ ...styles.input, color: '#000', minHeight: '60px', resize: 'vertical', flex: 1 }}
                            required
                          />
                          <button
                            type="button"
                            onClick={() => {
                              const newSteps = techProjectData.steps.filter((_, i) => i !== index);
                              setTechProjectData({ ...techProjectData, steps: newSteps });
                            }}
                            style={{ background: 'none', border: 'none', color: 'rgb(125, 143, 116)', fontSize: '36px', cursor: 'pointer', fontWeight: 'bold', lineHeight: 1, padding: '0 8px' }}
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
                        style={{ backgroundColor: colors.swampy, color: '#fff', border: 'none', padding: '8px 14px', borderRadius: '6px', cursor: 'pointer', fontWeight: '600', fontSize: '13px', alignSelf: 'flex-start', marginTop: '6px' }}
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

                    <div style={styles.buttonRow}>
                      <button type='submit' style={styles.primaryBtn}>
                        Зберегти
                      </button>
                      <button type='button' onClick={() => handleCancel(() => { if (initialTechProjectData) setTechProjectData({ ...initialTechProjectData }); })} style={styles.cancelBtn}>
                        Скасувати
                      </button>
                    </div>
                  </form>
                </div>
              )}

              {/* 8. AUTHOR SUPERVISION TAB */}
              {activeTab === 'authorSupervision' && (
                <div style={styles.card}>
                  <h1 style={styles.sectionTitle}>Керування послугою "Дизайнерський нагляд"</h1>
                  <form onSubmit={(e) => { e.preventDefault(); saveContent('authorSupervision', authorSupervisionData); }} style={styles.form}>
                    <div style={styles.inputGroup}>
                      <label style={styles.label}>Заголовок послуги</label>
                      <FontStyleEditor
                        styleConfig={authorSupervisionData.titleStyle}
                        onChange={(style) => setAuthorSupervisionData({ ...authorSupervisionData, titleStyle: style })}
                      />
                      <input
                        type='text'
                        value={authorSupervisionData.title}
                        onChange={(e) => setAuthorSupervisionData({ ...authorSupervisionData, title: e.target.value })}
                        style={styles.input}
                        required
                      />
                    </div>

                    <div style={styles.inputGroup}>
                      <label style={styles.label}>Опис послуги</label>
                      <FontStyleEditor
                        styleConfig={authorSupervisionData.descStyle}
                        onChange={(style) => setAuthorSupervisionData({ ...authorSupervisionData, descStyle: style })}
                      />
                      <textarea
                        value={authorSupervisionData.description}
                        onChange={(e) => setAuthorSupervisionData({ ...authorSupervisionData, description: e.target.value })}
                        style={{ ...styles.input, color: '#000', minHeight: '100px' }}
                        required
                      />
                    </div>

                    <div style={styles.buttonRow}>
                      <button type='submit' style={styles.primaryBtn}>
                        Зберегти
                      </button>
                      <button type='button' onClick={() => handleCancel(() => { if (initialAuthorSupervisionData) setAuthorSupervisionData({ ...initialAuthorSupervisionData }); })} style={styles.cancelBtn}>
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
          <div style={styles.modalOverlay}>
            <div style={styles.modalCard}>
              <h3 style={{ ...styles.modalTitle, color: modalState.type === 'error' ? '#dc3545' : colors.swampy }}>
                {modalState.title}
              </h3>
              <p style={styles.modalText}>{modalState.message}</p>
              <button onClick={closeModal} style={styles.primaryBtn}>
                OK
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

// Colors & Styles
const colors = {
  beige: '#ECEBE8',
  white: '#EBEAE5',
  sandy: '#D9D0BD',
  swampy: '#7D8F74',
  brown: 'rgb(125, 143, 116)',
  gray: '#C2C2C2',
};

const styles = {
  layoutContainer: {
    display: 'flex',
    minHeight: '100vh',
    backgroundColor: colors.beige,
    fontFamily: 'Manrope, sans-serif',
    color: 'rgb(125, 143, 116)',
  },
  drawer: {
    backgroundColor: colors.white,
    borderRight: `1px solid ${colors.sandy}`,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    position: 'sticky',
    top: 0,
    height: '100vh',
    overflowY: 'hidden',
    flexShrink: 0,
    transition: 'width 0.3s ease',
  },
  drawerHeader: {
    padding: '24px 20px',
    borderBottom: `1px solid ${colors.sandy}`,
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
  },
  drawerTitle: {
    fontSize: '20px',
    fontWeight: '700',
    margin: 0,
    color: 'rgb(125, 143, 116)',
  },
  userBadge: {
    backgroundColor: colors.sandy,
    color: 'rgb(125, 143, 116)',
    padding: '3px 8px',
    borderRadius: '4px',
    fontSize: '12px',
    fontWeight: '600',
    alignSelf: 'flex-start',
  },
  drawerNav: {
    padding: '20px 12px',
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    flex: 1,
    overflowY: 'auto',
    overflowX: 'hidden',
  },
  drawerItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    padding: '12px 16px',
    backgroundColor: 'transparent',
    border: 'none',
    borderRadius: '8px',
    color: 'rgb(125, 143, 116)',
    fontSize: '14px',
    fontWeight: '600',
    cursor: 'pointer',
    textAlign: 'left',
    transition: 'background-color 0.2s, color 0.2s',
    whiteSpace: 'nowrap',
    width: '100%',
  },
  drawerItemText: {
    color: 'inherit',
  },
  drawerItemActive: {
    backgroundColor: colors.swampy,
    color: '#fff',
  },
  drawerFooter: {
    padding: '0',
    borderTop: 'none',
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
  },
  siteLink: {
    color: 'rgb(125, 143, 116)',
    textDecoration: 'none',
    fontSize: '14px',
    fontWeight: '500',
    textAlign: 'center',
  },
  logoutBtn: {
    backgroundColor: 'rgb(125, 143, 116)',
    color: '#fff',
    border: 'none',
    padding: '10px 16px',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '14px',
    fontWeight: '600',
    width: '100%',
    textAlign: 'center',
  },
  mainContent: {
    flex: 1,
    padding: '40px',
    overflowY: 'auto',
    transition: 'max-width 0.3s ease',
  },
  sectionTitle: {
    fontSize: '24px',
    fontWeight: '700',
    marginBottom: '24px',
    color: 'rgb(125, 143, 116)',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: '1.2fr 1fr',
    gap: '30px',
  },
  card: {
    backgroundColor: colors.white,
    padding: '30px',
    borderRadius: '12px',
    border: `1px solid ${colors.sandy}`,
    boxShadow: '0 4px 20px rgba(39, 31, 24, 0.05)',
    marginBottom: '30px',
  },
  cardTitle: {
    fontSize: '18px',
    fontWeight: '700',
    marginBottom: '20px',
    color: 'rgb(125, 143, 116)',
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
    color: 'rgb(125, 143, 116)',
    fontWeight: '600',
  },
  input: {
    padding: '10px 14px',
    borderRadius: '6px',
    border: `1px solid ${colors.sandy}`,
    backgroundColor: '#fff',
    color: 'rgb(125, 143, 116)',
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
    transition: 'opacity 0.2s',
  },
  cancelBtn: {
    backgroundColor: colors.sandy,
    color: 'rgb(125, 143, 116)',
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
    maxHeight: '600px',
    overflowY: 'auto',
  },
  projectItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgba(125, 143, 116, 0.1)',
    padding: '12px 16px',
    borderRadius: '8px',
    border: `1px solid rgba(125, 143, 116, 0.2)`,
  },
  itemActions: {
    display: 'flex',
    gap: '8px',
  },
  editBtn: {
    backgroundColor: colors.swampy,
    color: '#fff',
    border: 'none',
    padding: '6px 10px',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '12px',
    fontWeight: '600',
  },
  deleteBtn: {
    backgroundColor: 'rgb(217, 208, 189)',
    color: 'rgb(125, 143, 116)',
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
  loadingText: {
    color: 'rgb(125, 143, 116)',
    textAlign: 'center',
    padding: '40px',
    fontSize: '16px',
  },
  modalOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000,
  },
  modalCard: {
    backgroundColor: colors.white,
    padding: '30px',
    borderRadius: '12px',
    boxShadow: '0 10px 40px rgba(39, 31, 24, 0.2)',
    width: '100%',
    maxWidth: '400px',
    textAlign: 'center',
    border: `1px solid ${colors.sandy}`,
  },
  modalTitle: {
    fontSize: '20px',
    fontWeight: '700',
    marginBottom: '12px',
    color: 'rgb(125, 143, 116)',
  },
  modalText: {
    fontSize: '15px',
    color: 'rgb(125, 143, 116)',
    marginBottom: '24px',
    lineHeight: '1.5',
  },
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
    color: 'rgb(125, 143, 116)',
    fontSize: '26px',
    marginBottom: '8px',
    textAlign: 'center',
    fontWeight: '700',
  },
  loginSubtitle: {
    color: 'rgb(125, 143, 116)',
    fontSize: '14px',
    marginBottom: '24px',
    textAlign: 'center',
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
