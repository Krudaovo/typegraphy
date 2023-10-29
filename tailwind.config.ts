/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary
        "primary-vivid-050": "#F0FCF9",
        "primary-vivid-100": "#C6F7E9",
        "primary-vivid-200": "#8EEDD1",
        "primary-vivid-300": "#5FE3C0",
        "primary-vivid-400": "#2DCCA7",
        "primary-vivid-500": "#17B897",
        "primary-vivid-600": "#079A82",
        "primary-vivid-700": "#048271",
        "primary-vivid-800": "#016457",
        "primary-vivid-900": "#004440",
        // Neutrals
        "neutrals-050": "#F7F7F7",
        "neutrals-100": "#E1E1E1",
        "neutrals-200": "#CFCFCF",
        "neutrals-300": "#B1B1B1",
        "neutrals-400": "#9E9E9E",
        "neutrals-500": "#7E7E7E",
        "neutrals-600": "#626262",
        "neutrals-700": "#515151",
        "neutrals-800": "#3B3B3B",
        "neutrals-900": "#222222",
        // Supporting
        "support-vivid-050": "#FFFBEA",
        "support-vivid-100": "#FFF3C4",
        "support-vivid-200": "#FCE588",
        "support-vivid-300": "#FADB5F",
        "support-vivid-400": "#F7C948",
        "support-vivid-500": "#F0B429",
        "support-vivid-600": "#DE911D",
        "support-vivid-700": "#CB6E17",
        "support-vivid-800": "#B44D12",
        "support-vivid-900": "#8D2B0B",
        // Supporting sub
        "support-sub-vivid-050": "#FFE3E3",
        "support-sub-vivid-100": "#FFBDBD",
        "support-sub-vivid-200": "#FF9B9B",
        "support-sub-vivid-300": "#F86A6A",
        "support-sub-vivid-400": "#EF4E4E",
        "support-sub-vivid-500": "#E12D39",
        "support-sub-vivid-600": "#CF1124",
        "support-sub-vivid-700": "#AB091E",
        "support-sub-vivid-800": "#8A041A",
        "support-sub-vivid-900": "#610316",
      },
      fontFamily: {
        "roboto": ['Roboto']
      },
      screens: {
        "xs": "375px",
        "sm": "640px",
        "md": "768px",
        "lg": "1024px",
        "xl": "1280px",
        "2xl": "1536px",
      },
      animation: {
        "material-shadow-xs": "material-shadow-xs .3s cubic-bezier(.39,.575,.565,1)   both",
        "material-shadow-sm": "material-shadow-sm .3s cubic-bezier(.39,.575,.565,1)   both",
        "material-shadow-md": "material-shadow-md .3s cubic-bezier(.39,.575,.565,1)   both",
        "material-shadow-lg": "material-shadow-lg .3s cubic-bezier(.39,.575,.565,1)   both",
        "material-shadow-xl": "material-shadow-xl .3s cubic-bezier(.25,.8,.25,1)   both",
      },
      keyframes: {
        "material-shadow-xs": {
          "0%": {
            "box-shadow": "0 0 0 0 transparent"
          },
          to: {
            "box-shadow": "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)"
          }
        },
        "material-shadow-sm": {
          "0%": {
            "box-shadow": "0 0 0 0 transparent"
          },
          to: {
            "box-shadow": "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)"
          }
        },
        "material-shadow-md": {
          "0%": {
            "box-shadow": "0 0 0 0 transparent"
          },
          to: {
            "box-shadow": "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)"
          }
        },
        "material-shadow-lg": {
          "0%": {
            "box-shadow": "0 0 0 0 transparent"
          },
          to: {
            "box-shadow": "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)"
          }
        },
        "material-shadow-xl": {
          "0%": {
            "box-shadow": "0 0 0 0 transparent"
          },
          to: {
            "box-shadow": "0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)"
          }
        },
      },
    },
  },
  plugins: [],
}
