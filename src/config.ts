import type {
    SiteConfig,
    NavBarConfig,
    SidebarLayoutConfig,
    ProfileConfig,
    AnnouncementConfig,
    PostConfig,
    FooterConfig,
    ParticleConfig,
    MusicPlayerConfig,
} from "./types/config";
import { LinkPreset } from "./types/config";
import { getTranslateLanguageFromConfig, detectBrowserLanguage } from "./utils/language-utils";

/**
 * 
 */

// 自动检测浏览器语言（服务端渲染时默认为 'en'）
const SITE_LANG = detectBrowserLanguage("zh");
// 如果需要强制使用特定语言，可以取消注释下面一行并设置语言代码
//const SITE_LANG = "zh"; // 强制使用的语言代码，'zh', 'en', 'ja' 等

// 设置网站时区
const SITE_TIMEZONE = 8; // from -12 to 12 default in UTC+8


// 站点配置
export const siteConfig: SiteConfig = {
	siteURL: "https://fx.126330.xyz/", // 请替换为你的站点 URL 并以斜杠结尾
	title: "万物之时资源站",
	subtitle: "资源分享",

	lang: SITE_LANG, // 自动检测的浏览器语言
	translate: {
		enable: true, // 启用翻译功能
		service: "client.edge", // 使用 Edge 浏览器翻译服务
		defaultLanguage: getTranslateLanguageFromConfig(SITE_LANG), // 根据检测到的语言自动设置默认翻译语言
		showSelectTag: true, // 不显示默认语言选择下拉菜单，使用自定义按钮
		autoDiscriminate: true, // 自动检测用户语言
		ignoreClasses: ["ignore", "banner-title", "banner-subtitle"], // 翻译时忽略的 CSS 类名
		ignoreTags: ["script", "style", "code", "pre"], // 翻译时忽略的 HTML 标签
	},
	// 时区配置
	timeZone: SITE_TIMEZONE,
	themeColor: {
		hue: 255, // 主题色的默认色相，范围从 0 到 360。例如：红色：0，青色：200，蓝绿色：250，粉色：345
		fixed: false, // 对访问者隐藏主题色选择器
	},
    defaultTheme: "dark", // "system" 跟随系统， "light" 浅色， "dark" 深色

	// 壁纸配置：支持 fullscreen（全屏壁纸）、banner（横幅壁纸）、none（纯色背景）三种模式
	wallpaper: {
		mode: "banner", // 壁纸显示模式："banner" | "fullscreen" | "none"

		// 壁纸图片源配置（fullscreen 和 banner 模式共享）
		// 支持单张图片或图片数组，当数组长度 > 1 时自动启用轮播
		src: {
			desktop: [
				"https://sjtu.126330.xyz/random?type=img",
			], // 桌面壁纸图片
			mobile: [
				"/assets/mobile-banner/mobileBanner_1.webp",
			], // 移动壁纸图片
		},

		position: "center", // 壁纸位置，等同于 object-position，支持 'top', 'center', 'bottom'

		// 轮播配置（fullscreen 和 banner 模式共享）
		carousel: {
			enable: true, // 为 true 时：为多张图片启用轮播。为 false 时：从数组中随机显示一张图片
			interval: 3.3, // 轮播间隔时间（秒）
		},

		// PicFlow API 支持（智能图片API，fullscreen 和 banner 模式共享）
		imageApi: {
			enable: false, // 启用图片API
			url: "http://domain.com/api_v2.php?format=text&count=4", // API地址，返回每行一个图片链接的文本
		},
		// 这里需要使用PicFlow API的Text返回类型,所以我们需要format=text参数
		// 项目地址:https://github.com/matsuzaka-yuki/PicFlow-API
		// 请自行搭建API

		// Banner 模式专属配置
		banner: {
			homeText: {
				enable: true, // 在主页显示自定义文本
				title: "万物之时资源站", // 主页横幅主标题
				subtitle: [
					"欢迎来到我的站点！",
				],
				typewriter: {
					enable: true, // 启用副标题打字机效果
					speed: 111, // 打字速度（毫秒）
					deleteSpeed: 51, // 删除速度（毫秒）
					pauseTime: 3000, // 完全显示后的暂停时间（毫秒）
				},
			},
			credit: {
				enable: false, // 显示横幅图片来源文本
				text: "Describe", // 要显示的来源文本
				url: "", // （可选）原始艺术品或艺术家页面的 URL 链接
			},
			navbar: {
				transparentMode: "semifull", // 导航栏透明模式："semi" 半透明加圆角，"full" 完全透明，"semifull" 动态透明
			},
			waves: {
				enable: true, // 启用水波纹效果
				performanceMode: true, // 启用性能模式（简化波浪效果以提升性能）
			},
		},

		// Fullscreen 模式专属配置
		fullscreen: {
			zIndex: -1, // 层级，确保壁纸在背景层
			opacity: 0.9, // 壁纸透明度
			blur: 1, // 背景模糊程度
			navbar: {
				transparentMode: "semi", // 导航栏透明模式：使用半透明模式而不是完全透明
			},
		},
	},

	toc: {
		enable: true, // 启用目录功能
		depth: 3, // 目录深度，1-6，1 表示只显示 h1 标题，2 表示显示 h1 和 h2 标题，依此类推
	},

	generateOgImages: false, // 启用生成OpenGraph图片功能,注意开启后要渲染很长时间，不建议本地调试的时候开启

	favicon: [
		// 留空以使用默认 favicon
		// {
		//   src: '/favicon/icon.png',    // 图标文件路径
		//   theme: 'light',              // 可选，指定主题 'light' | 'dark'
		//   sizes: '32x32',              // 可选，图标大小
		// }
	],

	// 字体配置
	font: {
		zenMaruGothic: {
			enable: true, // 启用全局圆体适合日语和英语，对中文适配一般
		},
		hanalei: {
			enable: false, // 启用 Hanalei 字体作为全局字体，适合中文去使用
		},
	},

	showLastModified: true, // 控制“上次编辑”卡片显示的开关

	bangumi: {
		userId: "913749", // 在此处设置你的Bangumi用户ID，可以设置为 "sai" 测试
	},
};

/**
 * 
 */

// 导航栏配置
export const navBarConfig: NavBarConfig = {
	links: [
		LinkPreset.Home,
		LinkPreset.Archive,
		// 支持多级菜单
		// {
		// 	name: "Links",
		// 	url: "/links/",
		// 	icon: "material-symbols:link",
		// 	children: [
		// 		{
		// 			name: "GitHub",
		// 			url: "https://github.com/wanwuzhishi",
		// 			external: true,
		// 			icon: "fa6-brands:github",
		// 		},
		// 		{
		// 			name: "Bilibili",
		// 			url: "https://space.bilibili.com/441476314",
		// 			external: true,
		// 			icon: "fa6-brands:bilibili",
		// 		},
		// 	],
		// },
		{
			name: "我的",
			url: "/content/",
			icon: "material-symbols:person",
			children: [
				LinkPreset.Anime,
				LinkPreset.Diary,
				{
					name: "Gallery",
					url: "/albums/",
					icon: "material-symbols:photo-library",
				},
			],
		},
		{
			name: "关于",
			url: "/content/",
			icon: "material-symbols:info",
			children: [LinkPreset.About, LinkPreset.Friends],
		},
		// {
		// 	name: "Others",
		// 	url: "#",
		// 	icon: "material-symbols:more-horiz",
		// 	children: [
		// 		{
		// 			name: "Projects",
		// 			url: "/projects/",
		// 			icon: "material-symbols:work",
		// 		},
		// 		{
		// 			name: "Skills",
		// 			url: "/skills/",
		// 			icon: "material-symbols:psychology",
		// 		},
		// 		{
		// 			name: "Timeline",
		// 			url: "/timeline/",
		// 			icon: "material-symbols:timeline",
		// 		},
		// 	],
		// },
	],
};


export const profileConfig: ProfileConfig = {
	avatar: "assets/images/avatar.png", // 相对于 /src 目录。如果以 '/' 开头，则相对于 /public 目录
	name: "万物之时",
	bio: "分享的快乐",
	links: [
		{
			name: "GitHub",
			icon: "fa6-brands:github",
			url: "https://github.com/wanwuzhishi",
		},
		{
			name: "Bilibili",
			icon: "fa6-brands:bilibili",
			url: "https://space.bilibili.com/441476314",
		},
		{
			name: "邮箱",
			icon: "material-symbols:mail",
			url: "mailto:wanwuzhishi@foxmail.com",
		},
	],
};


export const licenseConfig: LicenseConfig = {
	enable: true,
	name: "CC BY-NC-SA 4.0",
	url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
};


export const expressiveCodeConfig: ExpressiveCodeConfig = {
	// 注意：某些样式（如背景颜色）已被覆盖，请参阅 astro.config.mjs 文件。
	theme: "github-dark", // 请选择深色主题，因为此博客主题目前仅支持深色背景
};


export const commentConfig: CommentConfig = {
	enable: true, // 启用评论功能。当设置为 false 时，评论组件将不会显示在文章区域。
	twikoo: {
		envId: "https://shiny-bunny-17da57.netlify.app/.netlify/functions/twikoo",
		lang: "zh", // 设置 Twikoo 评论系统语言为中文
	},
};


export const announcementConfig: AnnouncementConfig = {
	title: "公告", // 公告标题
	content: "欢迎来到我的资源分享网站。", // 公告内容
	closable: true, // 允许用户关闭公告
	link: {
		enable: false, // 启用链接
		text: "Learn More", // 链接文本
		url: "/about/", // 链接 URL
		external: false, // 内部链接
	},
};


export const musicPlayerConfig: MusicPlayerConfig = {
	enable: false, // 启用音乐播放器功能
};


export const footerConfig: FooterConfig = {
	enable: true, // 是否启用Footer HTML注入功能
};
// 直接编辑 FooterConfig.html 文件来添加备案号等自定义内容


// 侧边栏布局配置
export const sidebarLayoutConfig: SidebarLayoutConfig = {
    // 启用侧边栏功能
    enable: true,
    // 侧边栏位置（左侧或右侧）
    position: "left",
    // 侧边栏组件配置列表
    components: [
        {
            // 组件类型
            type: "profile", // 用户资料组件
            // 是否启用该组件
            enable: true,
            // 组件显示顺序 (数字越小越靠前)
            order: 1,
            // 组件位置
            position: "top", // 固定在顶部
            // CSS 类名，用于应用样式和动画
            class: "onload-animation",
            // 动画延迟时间 (毫秒) ，用于错开动画效果
            animationDelay: 0,
        },
        {
            // 组件类型
            type: "announcement", // 公告组件
            // 是否启用该组件 (现在通过统一配置控制)
            enable: true,
            // 组件显示顺序
            order: 2,
            // 组件位置
            position: "top", // 固定在顶部
            // CSS 类名
            class: "onload-animation",
            // 动画延迟时间
            animationDelay: 50,
        },
        {
            // 组件类型
            type: "categories", // 分类组件
            // 是否启用该组件
            enable: true,
            // 组件显示顺序
            order: 3,
            // 组件位置
            position: "sticky", // 粘性定位，可滚动
            // CSS 类名
            class: "onload-animation",
            // 动画延迟时间
            animationDelay: 150,
            // 响应式配置
            responsive: {
                // 折叠阈值
                collapseThreshold: 5, // 当分类数量超过5个时自动折叠
            },
        },
        {
            // 组件类型
            type: "series", // 系列组件
            // 是否启用该组件
            enable: true,
            // 组件显示顺序
            order: 4,
            // 组件位置
            position: "sticky", // 粘性定位
            // CSS 类名
            class: "onload-animation",
            // 动画延迟时间
            animationDelay: 200,
            // 响应式配置
            responsive: {
                // 折叠阈值
                collapseThreshold: 10, // 当系列数量超过10个时自动折叠
            },
        },
        {
            // 组件类型
            type: "tags", // 标签组件
            // 是否启用该组件
            enable: true,
            // 组件显示顺序
            order: 5,
            // 组件位置
            position: "sticky", // 粘性定位
            // CSS 类名
            class: "onload-animation",
            // 动画延迟时间
            animationDelay: 250,
            // 响应式配置
            responsive: {
                // 折叠阈值
                collapseThreshold: 20, // 当标签数量超过20个时自动折叠
            },
        },
    ],
    // 默认动画配置
    defaultAnimation: {
        // 是否启用默认动画
        enable: true,
        // 基础延迟时间 (毫秒)
        baseDelay: 0,
        // 每个组件递增的延迟时间 (毫秒)
        increment: 50,
    },
    // 响应式布局配置
    responsive: {
        // 断点配置
        breakpoints: {
            // 移动端断点 (像素值)
            mobile: 768, // 屏幕宽度小于768px
            // 平板端断点 (像素值)
            tablet: 1024, // 屏幕宽度小于1024px
            // 桌面端断点 (像素值)
            desktop: 1280, // 屏幕宽度小于1280px
        },
        // 不同设备的布局模式 ("hidden" 不显示侧边栏 | "drawer" 抽屉模式 | "sidebar" 显示侧边栏)
        layout: {
            // 移动端
            mobile: "sidebar",
            // 平板端
            tablet: "sidebar",
            // 桌面端
            desktop: "sidebar",
        },
    },
};


// Umami统计配置
export const umamiConfig = {
    // 是否显示Umami统计
    enabled: false,
    // API密钥
    apiKey: import.meta.env.UMAMI_API_KEY,
    // UmamiCloudAPI地址
    baseUrl: "https://api.umami.is",
    // 要插入的Script
    scripts: import.meta.env.UMAMI_TRACKING_CODE,
} as const;


// 资料配置
export const profileConfig: ProfileConfig = {
    // 头像配置 (相对于 /src 目录。如果以 '/' 开头，则相对于 /public 目录)
    avatar: "assets/images/avatar.png",
    // 信息配置
    name: "Twilight",
    // 简介配置
    bio: "Hi",
    // 链接配置
    links: [
        {
            name: "GitHub",
            icon: "fa6-brands:github",
            url: "https://github.com/Spr-Aachen/Twilight",
        },
    ],
};


// 公告配置
export const announcementConfig: AnnouncementConfig = {
    // 公告标题
    title: "Announcement",
    // 公告内容
    content: "Welcome to my blog!",
    // 允许用户关闭公告
    closable: true,
    // 链接配置
    link: {
        // 启用链接
        enable: true,
        // 链接文本
        text: "Learn More",
        // 链接 URL
        url: "/about/",
        // 是否外部链接
        external: false, // 内部链接
    },
};

/**
 * 
 */

// 文章配置
export const postConfig: PostConfig = {
    // 显示“上次编辑”卡片
    showLastModified: true,
    // 在文章内容中显示封面
    showCoverInContent: false,
    // 代码高亮配置
    expressiveCode: {
        // 主题
        theme: "github-dark", // 深色背景
    },
    // 目录配置
    toc: {
        // 启用目录功能
        enable: true,
        // 目录深度 (1-6，1 表示只显示 h1 标题，2 表示显示 h1 和 h2 标题，依此类推)
        depth: 3,
    },
    // 许可证配置
    license: {
        // 启用许可证
        enable: true,
        // 许可证名称
        name: "CC BY-NC-SA 4.0",
        // 许可证链接
        url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
    },
    // 评论配置
    comment: {
        // 启用评论功能
        enable: false,
        // Twikoo 评论系统配置
        twikoo: {
            // 环境 ID
            envId: "https://twikoo.vercel.app",
            // 语言
            lang: "en",
        },
    },
};

/**
 * 
 */

// 页脚配置
export const footerConfig: FooterConfig = {
    // 启用 Footer HTML 注入功能
    enable: false,
};
// 直接编辑 FooterConfig.html 文件来添加备案号等自定义内容

/**
 * 
 */

// 粒子特效配置
export const particleConfig: ParticleConfig = {
    // 启用粒子特效
    enable: true,
    // 粒子数量
    particleNum: 12,
    // 粒子越界限制次数，-1为无限循环
    limitTimes: -1,
    // 粒子尺寸配置
    size: {
        // 粒子最小尺寸倍数
        min: 0.3,
        // 粒子最大尺寸倍数
        max: 0.9,
    },
    // 粒子透明度配置
    opacity: {
        // 粒子最小不透明度
        min: 0.3,
        // 粒子最大不透明度
        max: 0.9,
    },
    // 粒子移动速度配置
    speed: {
        // 水平移动速度
        horizontal: {
            // 最小值
            min: -0.9,
            // 最大值
            max: 0.9,
        },
        // 垂直移动速度
        vertical: {
            // 最小值
            min: 0.15,
            // 最大值
            max: 0.3,
        },
        // 旋转速度
        rotation: 0.12,
        // 消失速度
        fadeSpeed: 0.12, // 不应大于最小不透明度
    },
    // 粒子层级
    zIndex: 100, // 确保粒子在合适的层级显示
};


// 音乐播放器配置
export const musicPlayerConfig: MusicPlayerConfig = {
    // 启用音乐播放器功能
    enable: true,
};


// 看板娘配置
export const pioConfig: import("./types/config").PioConfig = {
    enable: true, // 启用看板娘
    models: ["/pio/models/pio/model.json"], // 默认模型路径
    position: "left", // 默认位置在右侧
    width: 280, // 默认宽度
    height: 250, // 默认高度
    mode: "draggable", // 默认为可拖拽模式
    hiddenOnMobile: true, // 默认在移动设备上隐藏
    dialog: {
        welcome: "Welcome！", // 欢迎词
        touch: [
            "你在干什么？",
            "不可以这样欺负我啦！",
        ], // 触摸提示
        home: "点击这里回到首页！", // 首页提示
        skin: [
            "想看看我的新衣服吗？",
            "新衣服真漂亮~"
        ], // 换装提示
        close: "下次再见吧~", // 关闭提示
        link: "", // 关于链接
    },
};

/**
 * 
 */

// 导出所有配置的统一接口
export const widgetConfigs = {
	profile: profileConfig,
	announcement: announcementConfig,
	music: musicPlayerConfig,
	layout: sidebarLayoutConfig,
	particle: particleConfig,
	fullscreenWallpaper: fullscreenWallpaperConfig,
	pio: pioConfig, // 添加 pio 配置
} as const;


export const umamiConfig = {
	enabled: true, // 是否显示Umami统计
	apiKey: import.meta.env.UMAMI_API_KEY, // API密钥
	baseUrl: "https://api.umami.is", // UmamiCloudAPI地址
	scripts: import.meta.env.UMAMI_TRACKING_CODE, // 要插入的Script
} as const;