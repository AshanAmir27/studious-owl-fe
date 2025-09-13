export default {
content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"] ,
theme: {
extend: {
colors: {
black1: '#313037',
black2: '#111116',
brand: '#E75C60',
text: '#C7C7C9'
},
keyframes: {
floaty: {
'0%': { transform: 'translateY(0px)' },
'50%': { transform: 'translateY(-12px)' },
'100%': { transform: 'translateY(0px)' }
}
},
animation: {
'floaty': 'floaty 6s ease-in-out infinite'
}
}
},
plugins: []
};