import { motion } from 'framer-motion';

const HerbAvatar = ({ mood = 'happy', size = 'normal' }) => {
  const scale = size === 'large' ? 1.3 : 0.85;
  const width = 110 * scale;
  const height = 110 * scale;
  
  return (
    <div style={{ width: `${width}px`, height: `${height}px` }} className="relative">
      <svg
        width={width}
        height={height}
        viewBox="0 0 110 110"
        style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))' }}
      >
        <defs>
          {/* Main body gradient - pale yellow to light green */}
          <radialGradient id="body-fill">
            <stop offset="0%" stopColor="#f7fee7" />
            <stop offset="40%" stopColor="#ecfccb" />
            <stop offset="100%" stopColor="#d9f99d" />
          </radialGradient>
          
          {/* Dark outer leaves */}
          <linearGradient id="dark-leaves" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#15803d" />
            <stop offset="100%" stopColor="#166534" />
          </linearGradient>
          
          {/* Medium green leaves */}
          <linearGradient id="med-leaves" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#22c55e" />
            <stop offset="100%" stopColor="#16a34a" />
          </linearGradient>
          
          {/* Light green leaves */}
          <linearGradient id="light-leaves" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#86efac" />
            <stop offset="100%" stopColor="#4ade80" />
          </linearGradient>
        </defs>
        
        {/* Dark outer ruffled leaves - the border */}
        <path
          d="M 55 15 
             C 50 13, 48 10, 47 8 
             C 46 10, 44 12, 40 13
             C 36 14, 32 13, 28 14
             C 24 15, 21 17, 18 20
             C 16 23, 14 27, 13 31
             C 12 35, 12 39, 12 43
             C 12 47, 13 51, 14 55
             C 15 59, 17 63, 19 66
             C 21 69, 24 72, 27 74
             C 30 76, 34 77, 38 78
             C 42 79, 46 79, 50 78
             C 52 77, 54 76, 56 74
             C 55 76, 53 78, 50 80
             C 47 82, 43 83, 39 84
             C 36 85, 33 86, 30 88
             C 28 90, 27 92, 28 95
             C 29 97, 31 98, 34 98
             C 37 98, 40 97, 43 96
             C 46 95, 49 94, 52 93
             C 55 92, 58 92, 61 93
             C 64 94, 67 95, 70 96
             C 73 97, 76 98, 79 98
             C 82 98, 84 97, 85 95
             C 86 92, 85 90, 83 88
             C 80 86, 77 85, 74 84
             C 70 83, 66 82, 63 80
             C 60 78, 58 76, 57 74
             C 59 76, 61 77, 63 78
             C 67 79, 71 79, 75 78
             C 79 77, 83 76, 86 74
             C 89 72, 92 69, 94 66
             C 96 63, 98 59, 99 55
             C 100 51, 101 47, 101 43
             C 101 39, 101 35, 100 31
             C 99 27, 97 23, 95 20
             C 92 17, 89 15, 85 14
             C 81 13, 77 14, 73 13
             C 69 12, 67 10, 66 8
             C 65 10, 63 13, 60 15
             Z"
          fill="url(#dark-leaves)"
          stroke="#0f5a2e"
          strokeWidth="1.5"
        />
        
        {/* Medium green layer */}
        <ellipse
          cx="55"
          cy="50"
          rx="38"
          ry="40"
          fill="url(#med-leaves)"
        />
        
        {/* Light green wavy inner leaves */}
        <path
          d="M 55 20
             C 50 22, 46 24, 42 27
             C 38 30, 35 34, 33 38
             C 31 42, 30 46, 30 50
             C 30 54, 31 58, 33 62
             C 35 66, 38 70, 42 73
             C 46 76, 50 78, 55 78
             C 60 78, 64 76, 68 73
             C 72 70, 75 66, 77 62
             C 79 58, 80 54, 80 50
             C 80 46, 79 42, 77 38
             C 75 34, 72 30, 68 27
             C 64 24, 60 22, 55 20
             Z"
          fill="url(#light-leaves)"
        />
        
        {/* Main pale body with radial gradient */}
        <ellipse
          cx="55"
          cy="50"
          rx="30"
          ry="32"
          fill="url(#body-fill)"
        />
        
        {/* Radial highlight lines from center */}
        <path d="M 55 25 L 55 48" stroke="#bef264" strokeWidth="2" opacity="0.4" strokeLinecap="round"/>
        <path d="M 55 48 L 45 32" stroke="#bef264" strokeWidth="1.5" opacity="0.3" strokeLinecap="round"/>
        <path d="M 55 48 L 65 32" stroke="#bef264" strokeWidth="1.5" opacity="0.3" strokeLinecap="round"/>
        <path d="M 55 48 L 38 40" stroke="#bef264" strokeWidth="1.5" opacity="0.3" strokeLinecap="round"/>
        <path d="M 55 48 L 72 40" stroke="#bef264" strokeWidth="1.5" opacity="0.3" strokeLinecap="round"/>
        <path d="M 55 48 L 35 52" stroke="#bef264" strokeWidth="1.5" opacity="0.3" strokeLinecap="round"/>
        <path d="M 55 48 L 75 52" stroke="#bef264" strokeWidth="1.5" opacity="0.3" strokeLinecap="round"/>
        
        {/* Bottom stem part */}
        <path
          d="M 48 75 
             C 46 77, 44 80, 43 83
             C 42 86, 42 89, 43 92
             C 44 95, 46 97, 49 98
             C 52 99, 55 99, 58 99
             C 61 99, 64 98, 66 96
             C 68 94, 69 91, 69 88
             C 69 85, 68 82, 66 79
             C 64 76, 62 74, 60 73
             L 48 75
             Z"
          fill="#a3e635"
          stroke="#84cc16"
          strokeWidth="1"
        />
        
        {/* Stem shading */}
        <ellipse
          cx="55"
          cy="85"
          rx="8"
          ry="10"
          fill="#84cc16"
          opacity="0.3"
        />
        

        {/* Face - Left eye */}
<motion.g
  animate={{
    scaleY: [1, 0.1, 1, 1, 1, 1]
  }}
  transition={{
    duration: 3,
    repeat: Infinity,
    times: [0, 0.05, 0.1, 0.15, 0.9, 1],
    repeatDelay: 2
  }}
  style={{ transformOrigin: '46px 48px' }}
>
  <ellipse
    cx="46"
    cy="48"
    rx="4"
    ry="5.5"
    fill="white"
  />
  <ellipse
    cx="46"
    cy="49"
    rx="2.5"
    ry="3.5"
    fill="#1e293b"
  />
  <ellipse
    cx="46.8"
    cy="47.5"
    rx="1"
    ry="1.3"
    fill="white"
  />
</motion.g>

{/* Face - Right eye */}
<motion.g
  animate={{
    scaleY: [1, 0.1, 1, 1, 1, 1]
  }}
  transition={{
    duration: 3,
    repeat: Infinity,
    times: [0, 0.05, 0.1, 0.15, 0.9, 1],
    repeatDelay: 2
  }}
  style={{ transformOrigin: '64px 48px' }}
>
  <ellipse
    cx="64"
    cy="48"
    rx="4"
    ry="5.5"
    fill="white"
  />
  <ellipse
    cx="64"
    cy="49"
    rx="2.5"
    ry="3.5"
    fill="#1e293b"
  />
  <ellipse
    cx="64.8"
    cy="47.5"
    rx="1"
    ry="1.3"
    fill="white"
  />
</motion.g>
        
        {/* Mouth */}
        {mood === 'happy' && (
          <path
            d="M 48 58 Q 55 62, 62 58"
            stroke="#16a34a"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
          />
        )}
        
        {mood === 'excited' && (
          <circle cx="55" cy="60" r="5" fill="#16a34a" />
        )}
        
        {mood === 'thinking' && (
          <ellipse cx="55" cy="59" rx="5" ry="2.5" fill="#16a34a" />
        )}
        
        {/* Blush */}
        <ellipse
          cx="38"
          cy="54"
          rx="3.5"
          ry="2.5"
          fill="#fda4af"
          opacity="0.6"
        />
        <ellipse
          cx="72"
          cy="54"
          rx="3.5"
          ry="2.5"
          fill="#fda4af"
          opacity="0.6"
        />
      </svg>
      
      {mood === 'excited' && (
        <>
          <div className="absolute animate-pulse" style={{
            top: '5px',
            right: '5px',
            fontSize: size === 'large' ? '22px' : '16px'
          }}>
            ✨
          </div>
          <div className="absolute animate-pulse" style={{
            bottom: '15px',
            left: '5px',
            fontSize: size === 'large' ? '22px' : '16px',
            animationDelay: '0.4s'
          }}>
            💚
          </div>
        </>
      )}
    </div>
  );
};

export default HerbAvatar;