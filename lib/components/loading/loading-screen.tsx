'use client'

import { useEffect, useState } from 'react'

export function LoadingScreen() {
  const [dots, setDots] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev + 1) % 4)
    }, 400)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-zinc-950">
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute top-1/4 -left-48 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
          style={{
            animation: 'float 8s ease-in-out infinite',
            transition: 'opacity 1s ease-in-out'
          }}
        />
        <div 
          className="absolute bottom-1/4 -right-48 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
          style={{
            animation: 'float 10s ease-in-out infinite',
            animationDelay: '2s',
            transition: 'opacity 1s ease-in-out 0.5s'
          }}
        />
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-500/20 rounded-full blur-3xl"
          style={{
            animation: 'float 6s ease-in-out infinite',
            animationDelay: '1s',
            transition: 'opacity 1s ease-in-out 1s'
          }}
        />
      </div>

      {/* Loading Content */}
      <div 
        className="relative z-10 flex flex-col items-center gap-8"
        style={{
          transition: 'all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)'
        }}
      >
        {/* Spinner Container */}
        <div className="relative">
          {/* Outer Ring - Purple */}
          <div 
            className="w-24 h-24 rounded-full border-4 border-transparent"
            style={{
              background: 'linear-gradient(45deg, transparent 33%, rgba(168, 85, 247, 0.8) 100%)',
              animation: 'spin 1.5s linear infinite',
              clipPath: 'inset(0 0 0 0 round 50%)',
            }}
          >
            <div className="absolute inset-1 rounded-full bg-zinc-950" />
          </div>
          
          {/* Middle Ring - Blue */}
          <div 
            className="absolute inset-0 flex items-center justify-center"
            style={{ transform: 'rotate(120deg)' }}
          >
            <div 
              className="w-18 h-18 rounded-full border-4 border-transparent"
              style={{
                width: '4.5rem',
                height: '4.5rem',
                background: 'linear-gradient(45deg, transparent 33%, rgba(96, 165, 250, 0.8) 100%)',
                animation: 'spin 1.2s linear infinite reverse',
                clipPath: 'inset(0 0 0 0 round 50%)',
              }}
            >
              <div className="absolute inset-1 rounded-full bg-zinc-950" />
            </div>
          </div>

          {/* Inner Ring - Pink */}
          <div 
            className="absolute inset-0 flex items-center justify-center"
            style={{ transform: 'rotate(240deg)' }}
          >
            <div 
              className="w-12 h-12 rounded-full border-4 border-transparent"
              style={{
                background: 'linear-gradient(45deg, transparent 33%, rgba(244, 114, 182, 0.8) 100%)',
                animation: 'spin 1s linear infinite',
                clipPath: 'inset(0 0 0 0 round 50%)',
              }}
            >
              <div className="absolute inset-1 rounded-full bg-zinc-950" />
            </div>
          </div>

          {/* Center Pulsing Core */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div 
              className="w-4 h-4 rounded-full"
              style={{
                background: 'linear-gradient(135deg, #a855f7 0%, #60a5fa 50%, #f472b6 100%)',
                animation: 'pulse 2s ease-in-out infinite',
                boxShadow: '0 0 20px rgba(168, 85, 247, 0.5)'
              }}
            />
          </div>

          {/* Orbiting Particles */}
          {[0, 60, 120, 180, 240, 300].map((angle, i) => (
            <div
              key={angle}
              className="absolute inset-0 flex items-center justify-center"
              style={{
                transform: `rotate(${angle}deg)`,
                animation: `orbit 3s linear infinite`,
                animationDelay: `${i * 0.2}s`
              }}
            >
              <div 
                className="w-2 h-2 rounded-full bg-purple-400/50 absolute"
                style={{ 
                  top: '0',
                  left: '50%',
                  transform: 'translateX(-50%)',
                }}
              />
            </div>
          ))}
        </div>

        {/* Loading Text with Gradient */}
        <div className="text-center space-y-3">
          <h2 
            className="text-3xl font-bold text-transparent bg-clip-text"
            style={{
              backgroundImage: 'linear-gradient(90deg, #a855f7, #60a5fa, #f472b6, #a855f7)',
              backgroundSize: '200% auto',
              animation: 'gradient 3s linear infinite'
            }}
          >
            Loading{'.'.repeat(dots)}
          </h2>
          <p 
            className="text-sm text-gray-400"
            style={{
              animation: 'fade 2s ease-in-out infinite'
            }}
          >
            Preparing your experience
          </p>
        </div>

        {/* Progress Bar */}
        <div className="w-64 h-1.5 bg-gray-800/50 rounded-full overflow-hidden backdrop-blur-sm">
          <div 
            className="h-full rounded-full"
            style={{
              background: 'linear-gradient(90deg, #a855f7, #60a5fa, #f472b6)',
              animation: 'progress 2s ease-in-out infinite'
            }}
          />
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.5;
            transform: scale(1.2);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -30px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }

        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          100% {
            background-position: 200% 50%;
          }
        }

        @keyframes progress {
          0% {
            transform: translateX(-100%);
          }
          50% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        @keyframes fade {
          0%, 100% {
            opacity: 0.4;
          }
          50% {
            opacity: 1;
          }
        }

        @keyframes orbit {
          from {
            transform: rotate(0deg) translateX(50px) rotate(0deg);
          }
          to {
            transform: rotate(360deg) translateX(50px) rotate(-360deg);
          }
        }
      `}</style>
    </div>
  )
}
