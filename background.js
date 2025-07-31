// 背景图片和署名配置
const config = {
  // 时间区间配置 (24小时制)
  timeRanges: [
    // 每个时间段可以配置多张图片，随机显示
    {
      start: 0, 
      end: 4, 
      images: [
        { path: 'https://unsplash.com/photos/IjEtFjxXweE/download?ixid=M3wxMjA3fDB8MXx0b3BpY3x8Ym84alFLVGFFMFl8fHx8fDJ8fDE3NTA1MjQyMDZ8&force=true', signature:'Photo by <a href="https://unsplash.com/@arnaudastro?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">arnaud girault</a> on <a href="https://unsplash.com/photos/a-star-forming-region-in-the-sky-IjEtFjxXweE?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>' },

      ],
      cacheKey: 'late_night'
    },
    // 日出时段
    { start: 4, end: 6, 
      images: [
        { path: 'background/sunrise/arthur-tseng-hT9_Z-HbNC8-unsplash.jpg', signature:'Photo by <a href="https://unsplash.com/@arthur3607?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Arthur Tseng</a> on <a href="https://unsplash.com/photos/golden-sunset-illuminates-the-cloudy-sky-hT9_Z-HbNC8?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>' },
        { path: 'https://unsplash.com/photos/_UCVrH-ZIIg/download?ixid=M3wxMjA3fDB8MXx0b3BpY3x8Ym84alFLVGFFMFl8fHx8fDJ8fDE3NTA1MTkyMTV8&force=true', signature: 'Photo by <a href="https://unsplash.com/@davies_designs?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Davies Designs Studio</a> on <a href="https://unsplash.com/photos/white-cloud-formations-_UCVrH-ZIIg?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>' }
      ],
      cacheKey: 'sunrise' },

    // 早晨时段
    { start: 6, end: 8, 
      images: [
        { path: 'https://unsplash.com/photos/U1cpCMOy1H0/download?ixid=M3wxMjA3fDB8MXx0b3BpY3x8Ym84alFLVGFFMFl8fHx8fDJ8fDE3NTA1MjM2MTd8&force=true', signature: 'Photo by <a href="https://unsplash.com/@daveruck?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Dave Ruck</a> on <a href="https://unsplash.com/photos/a-swan-glides-on-a-calm-lake-at-dusk-U1cpCMOy1H0?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>' },
        { path: 'https://unsplash.com/photos/6VhIHgqo5qI/download?ixid=M3wxMjA3fDB8MXx0b3BpY3x8Ym84alFLVGFFMFl8fHx8fDJ8fDE3NTA1MjEwNDB8&force=true', signature:'Photo by <a href="https://unsplash.com/@betagamma?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Daniil Silantev</a> on <a href="https://unsplash.com/photos/mountains-are-silhouetted-against-a-vibrant-sunrise-6VhIHgqo5qI?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>'}
      ],
      cacheKey: 'early_morning' },

    // 上午时段
    { start: 8, end: 11, 
      images: [
        { path: 'https://unsplash.com/photos/nq8JFN71Se0/download?ixid=M3wxMjA3fDB8MXx0b3BpY3x8Ym84alFLVGFFMFl8fHx8fDJ8fDE3NTA1MTY2NDh8&force=true', signature: 'Photo by <a href="https://unsplash.com/@helloiamtuan?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Antoine LE</a> on <a href="https://unsplash.com/photos/wavy-building-facade-against-a-clear-blue-sky-nq8JFN71Se0?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>' },
      ],
      cacheKey: 'morning' },

    // 中午时段
    { start: 11, end: 13, 
      images: [
        { path: 'https://unsplash.com/photos/gyQHFmi_zcg/download?ixid=M3wxMjA3fDB8MXx0b3BpY3x8Ym84alFLVGFFMFl8fHx8fDJ8fDE3NTA1MjIzNTR8&force=true', signature: 'Photo by <a href="https://unsplash.com/@danielsessler?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Daniel Seßler</a> on <a href="https://unsplash.com/photos/a-mountain-range-covered-in-fog-and-clouds-gyQHFmi_zcg?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>' },

      ],
      cacheKey: 'noon' },

    // 下午时段
    { start: 13, end: 17, 
      images: [
        { path: 'https://unsplash.com/photos/6O6BZerihQw/download?ixid=M3wxMjA3fDB8MXx0b3BpY3x8Ym84alFLVGFFMFl8fHx8fDJ8fDE3NTA1MTgyNzh8&force=true', signature: 'Photo by <a href="https://unsplash.com/@micahandsammiechaffin?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Micah & Sammie Chaffin</a> on <a href="https://unsplash.com/photos/boats-float-on-a-serene-lake-near-mountains-6O6BZerihQw?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>' },
        { path: 'https://unsplash.com/photos/HZ3EXv2h_LQ/download?ixid=M3wxMjA3fDB8MXx0b3BpY3x8Ym84alFLVGFFMFl8fHx8fDJ8fDE3NTA1MjM2MTd8&force=true', signature: 'Photo by <a href="https://unsplash.com/@anamnesis33?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Andrey K</a> on <a href="https://unsplash.com/photos/delicate-light-blue-flowers-against-a-soft-background-HZ3EXv2h_LQ?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>' },

      ],
      cacheKey: 'afternoon' },

    // 日落时段
    { start: 17, end: 19, 
      images: [
        { path: 'https://unsplash.com/photos/igRXeLr7PDU/download?ixid=M3wxMjA3fDB8MXx0b3BpY3x8Ym84alFLVGFFMFl8fHx8fDJ8fDE3NTA1MTkzMzh8&force=true', signature: 'Photo by <a href="https://unsplash.com/@borkography?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Adam Borkowski</a> on <a href="https://unsplash.com/photos/brown-high-rise-building-during-night-time-igRXeLr7PDU?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>' },

      ],
      cacheKey: 'sunset' },

    // 黄昏时段
    { start: 19, end: 21, 
      images: [
        { path: 'https://unsplash.com/photos/4dbdXYu7E3Q/download?ixid=M3wxMjA3fDB8MXx0b3BpY3x8Ym84alFLVGFFMFl8fHx8fDJ8fDE3NTA1MjM2MTd8&force=true', signature: 'Photo by <a href="https://unsplash.com/@anamnesis33?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Andrey K</a> on <a href="https://unsplash.com/photos/delicate-light-blue-flowers-against-a-soft-background-HZ3EXv2h_LQ?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>' },
        { path: 'https://unsplash.com/photos/OtQbFMOZlhc/download?ixid=M3wxMjA3fDB8MXx0b3BpY3x8Ym84alFLVGFFMFl8fHx8fDJ8fDE3NTA1MTkyMTV8&force=true', signature: 'Photo by <a href="https://unsplash.com/@marekpiwnicki?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Marek Piwnicki</a> on <a href="https://unsplash.com/photos/snowy-mountain-under-a-vibrant-sunset-sky-OtQbFMOZlhc?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>' }
      ],
      cacheKey: 'dusk' },

    // 晚上时段
    { start: 21, end: 24, 
      images: [
        { path: 'https://unsplash.com/photos/IRqfQCgELX4/download?ixid=M3wxMjA3fDB8MXx0b3BpY3x8Ym84alFLVGFFMFl8fHx8fDJ8fDE3NTA1MjEwNDB8&force=true', signature: 'Photo by <a href="https://unsplash.com/@clarenceehsu?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Clarence E. Hsu</a> on <a href="https://unsplash.com/photos/aerial-view-of-a-crowded-city-intersection-at-night-IRqfQCgELX4?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>' },
      ],
      cacheKey: 'night' }
  ],

  // 默认配置（当不在任何时间区间时使用）
  default: {
    images: [
      {
        path: 'https://unsplash.com/photos/5q4zsTaVN4I/download?ixid=M3wxMjA3fDB8MXx0b3BpY3x8Ym84alFLVGFFMFl8fHx8fDJ8fDE3NTA1MTgyNzh8&force=true',
        signature: 'Photo by <a href="https://unsplash.com/@philipsfuture?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Philip Oroni</a> on <a href="https://unsplash.com/photos/abstract-layered-shapes-with-a-gradient-orange-color-5q4zsTaVN4I?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>'
      }
    ],
    cacheKey: 'default'
  }
};

// 获取当前时间区间配置
function getCurrentConfig() {
  const now = new Date();
  const hours = now.getHours();
  console.log('[DEBUG] Current time:', now.toLocaleString(), 'Hour:', hours);
  
  // 查找匹配的时间区间
  for (const range of config.timeRanges) {
    if (range.start <= range.end) {
      // 正常时间区间（如 6-12）
      if (hours >= range.start && hours < range.end) {
        console.log(`[DEBUG] Matched time range: ${range.start}-${range.end} (${range.cacheKey})`);
        return range;
      }
    } else {
      // 跨天时间区间（如 22-6）
      if (hours >= range.start || hours < range.end) {
        console.log(`[DEBUG] Matched cross-day range: ${range.start}-${range.end} (${range.cacheKey})`);
        return range;
      }
    }
  }
  
  // 没有匹配则返回默认配置
  return config.default;
}

// 图片缓存对象
const imageCache = {};

// 获取随机图片和署名
function getRandomImage(config) {
  if (!config.images || config.images.length === 0) {
    console.warn('[WARN] No images configured, using default');
    return { image: config.image || '', signature: config.signature || '' };
  }
  
  // 检查缓存中是否有该时间段的图片
  if (config.cacheKey && imageCache[config.cacheKey]) {
    console.log(`[DEBUG] Using cached image for ${config.cacheKey}`);
    return imageCache[config.cacheKey];
  }
  
  // 随机选择一张图片
  const randomIndex = Math.floor(Math.random() * config.images.length);
  const selected = config.images[randomIndex];
  console.log(`[DEBUG] Selected image index ${randomIndex} from ${config.images.length} options`);
  
  // 缓存结果
  if (config.cacheKey) {
    console.log(`[DEBUG] Caching image for ${config.cacheKey}`);
    imageCache[config.cacheKey] = selected;
  }
  
  return selected;
}

// 更新背景图片和署名
function updateBackground() {
  console.log('[DEBUG] Updating background...');
  const currentConfig = getCurrentConfig();
  console.log('[DEBUG] Current config:', currentConfig);
  // 从随机图片对象中解构出path和signature属性
  // path是图片URL字符串，signature是署名信息
  const { path: image, signature } = getRandomImage(currentConfig);
  console.log('[DEBUG] Selected image:', image);
  
  // 设置背景图片（添加URL有效性检查）
  if (image && typeof image === 'string' && image.trim() !== '') {
    console.log('[DEBUG] Setting background image:', image);
    document.body.style.backgroundImage = `url(${image})`;
  } else {
    console.error('[ERROR] Invalid image URL:', image);
    console.log('[DEBUG] Falling back to default image');
    // 使用默认图片作为后备
    document.body.style.backgroundImage = `url(${config.default.image})`;
  }
  document.body.style.backgroundSize = 'cover';
  document.body.style.backgroundPosition = 'center';
  document.body.style.backgroundRepeat = 'no-repeat';
  
  // 创建或更新署名元素
  let signatureElement = document.getElementById('signature');
  if (!signatureElement) {
    signatureElement = document.createElement('div');
    signatureElement.id = 'signature';
    signatureElement.className = 'signature';
    // 优先尝试放置在settingsbar中
    const settingsBar = document.getElementById('settingsbar');
    if (settingsBar) {
      settingsBar.appendChild(signatureElement);
    } else {
      // 如果没有settingsbar则使用绝对定位
      signatureElement.style.position = 'fixed';
      signatureElement.style.right = '20px';
      signatureElement.style.bottom = '20px';
    }
    
    
    // 确保元素被添加到DOM中
    if (!settingsBar) {
      document.body.appendChild(signatureElement);
    }
  }
  signatureElement.innerHTML = signature;
}

// 页面加载时初始化
window.addEventListener('load', updateBackground);

// 每分钟检查一次是否需要更新
setInterval(updateBackground, 60000);

// 使用方法说明：
// 1. 在pic文件夹中放置对应的图片文件（如morning.jpg, afternoon.jpg等）
// 2. 修改config对象中的时间区间和对应图片/署名
// 3. 确保在HTML文件中引入此脚本
