module.exports = {
  content: ["./pages/*.{html,js}", "./index.html", "./*.html", "./js/*.js"],
  theme: {
    extend: {
      colors: {
        // Primary Colors (Gold)
        primary: {
          50: "#FFFBF0", // gold-50
          100: "#FFF4D6", // gold-100
          200: "#FFE8AD", // gold-200
          300: "#FFDC84", // gold-300
          400: "#E6C547", // gold-400
          500: "#DAA520", // gold-500
          600: "#B8860B", // gold-600
          700: "#996F09", // gold-700
          800: "#7A5807", // gold-800
          900: "#5B4105", // gold-900
          DEFAULT: "#B8860B", // gold-600
        },
        // Secondary Colors (Maroon)
        secondary: {
          50: "#FFF0F0", // maroon-50
          100: "#FFE0E0", // maroon-100
          200: "#FFC1C1", // maroon-200
          300: "#FFA2A2", // maroon-300
          400: "#CC6666", // maroon-400
          500: "#B33333", // maroon-500
          600: "#8B0000", // maroon-600
          700: "#660000", // maroon-700
          800: "#4D0000", // maroon-800
          900: "#330000", // maroon-900
          DEFAULT: "#8B0000", // maroon-600
        },
        // Accent Colors (WhatsApp Green)
        accent: {
          50: "#F0FFF4", // whatsapp-green-50
          100: "#DCFCE7", // whatsapp-green-100
          200: "#BBF7D0", // whatsapp-green-200
          300: "#86EFAC", // whatsapp-green-300
          400: "#4ADE80", // whatsapp-green-400
          500: "#25D366", // whatsapp-green-500
          600: "#16A34A", // whatsapp-green-600
          700: "#15803D", // whatsapp-green-700
          800: "#166534", // whatsapp-green-800
          900: "#14532D", // whatsapp-green-900
          DEFAULT: "#25D366", // whatsapp-green-500
        },
        // Background Colors
        background: "#FFF8DC", // cream-50
        surface: "#F5F5DC", // beige-100
        "surface-light": "#FAFAFA", // neutral-50
        
        // Text Colors
        "text-primary": "#2F2F2F", // gray-800
        "text-secondary": "#666666", // gray-600
        "text-muted": "#9CA3AF", // gray-400
        
        // Status Colors
        success: {
          50: "#F0FDF4", // forest-green-50
          100: "#DCFCE7", // forest-green-100
          500: "#228B22", // forest-green-500
          DEFAULT: "#228B22", // forest-green-500
        },
        warning: {
          50: "#FFF7ED", // orange-50
          100: "#FFEDD5", // orange-100
          500: "#FF6B35", // orange-500
          DEFAULT: "#FF6B35", // orange-500
        },
        error: {
          50: "#FEF2F2", // red-50
          100: "#FEE2E2", // red-100
          500: "#DC143C", // crimson
          DEFAULT: "#DC143C", // crimson
        },
      },
      fontFamily: {
        playfair: ['Playfair Display', 'serif'],
        inter: ['Inter', 'sans-serif'],
        dancing: ['Dancing Script', 'cursive'],
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      fontSize: {
        'hero': ['3.5rem', { lineHeight: '1.1', fontWeight: '700' }],
        'section-title': ['2.5rem', { lineHeight: '1.2', fontWeight: '600' }],
        'card-title': ['1.5rem', { lineHeight: '1.3', fontWeight: '600' }],
        'testimonial': ['1.125rem', { lineHeight: '1.6', fontWeight: '400' }],
      },
      boxShadow: {
        'whatsapp-cta': '0 4px 12px rgba(37, 211, 102, 0.15)',
        'wedding-card': '0 2px 8px rgba(0, 0, 0, 0.1)',
        'wedding-card-hover': '0 4px 16px rgba(0, 0, 0, 0.15)',
        'subtle': '0 1px 3px rgba(0, 0, 0, 0.1)',
        'whatsapp-hover': '0 6px 16px rgba(37, 211, 102, 0.2)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'pulse-gentle': 'pulseGentle 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        pulseGentle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      borderRadius: {
        'xl': '12px',
        '2xl': '16px',
      },
      transitionDuration: {
        '250': '250ms',
      },
      transitionTimingFunction: {
        'smooth': 'ease-in-out',
      },
    },
  },
  plugins: [],
}