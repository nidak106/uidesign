import React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { useNavigate } from 'react-router-dom';

// 📊 Sinusoidal wave data with randomness
const waveData = Array.from({ length: 100 }, (_, i) => ({
  x: i,
  used: 40 + Math.sin(i / 5) * 15 + Math.random() * 10,
  current: 35 + Math.cos(i / 4) * 12 + Math.random() * 8,
}));

export default function MainDashboard() {
  const navigate = useNavigate(); // 👈 navigation hook

  return (
    <div className="p-6 bg-[#f0faff] min-h-screen overflow-y-auto">
      {/* 📊 Sinusoidal Resource Graph */}
      <div className="bg-white rounded-2xl shadow p-6 mb-8 w-full">
        <h2 className="text-xl font-semibold text-[#0283AE] mb-4">
          Resource Usage Overview
        </h2>

        {/* 🖱️ Clickable chart */}
        <div
          onClick={() => navigate('/resources')}
          className="cursor-pointer transition-transform hover:scale-[1.01]"
          title="Click to view cloud resource details"
        >
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={waveData}>
              <defs>
                <linearGradient id="gradientUsed" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#3DCBFF" stopOpacity={0.5} />
                  <stop offset="100%" stopColor="#3DCBFF" stopOpacity={0} />
                </linearGradient>
                <linearGradient
                  id="gradientCurrent"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop offset="0%" stopColor="#0283AE" stopOpacity={0.6} />
                  <stop offset="100%" stopColor="#0283AE" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="x" hide />
              <YAxis hide />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="used"
                stroke="#3DCBFF"
                fill="url(#gradientUsed)"
                strokeWidth={2}
                dot={false}
              />
              <Area
                type="linear"
                dataKey="current"
                stroke="#0283AE"
                fill="url(#gradientCurrent)"
                strokeWidth={2}
                dot={false}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
