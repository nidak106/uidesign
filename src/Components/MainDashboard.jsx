import React, { useRef } from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

// Wave data with variation
const waveData = Array.from({ length: 100 }, (_, i) => ({
  x: i,
  used: 40 + Math.sin(i / 5) * 15 + Math.random() * 10,
  current: 35 + Math.cos(i / 4) * 12 + Math.random() * 8,
}));

// Card wrapper
const Card = ({ title, children }) => (
  <div className="bg-white rounded-2xl shadow p-4 w-full">
    <h3 className="text-sm font-semibold text-gray-700 mb-2">{title}</h3>
    {children}
  </div>
);

// Progress bars with blue shades
const ProgressBars = ({ values }) => {
  const blueShades = ['#3DCBFF', '#0283AE', '#1668A9', '#0B4F75', '#022D49'];
  return (
    <div className="space-y-1">
      {values.map((val, index) => (
        <div key={index} className="w-full bg-[#dbeffe] rounded-full h-3">
          <div
            className="h-3 rounded-full transition-all duration-300"
            style={{
              width: `${val}%`,
              backgroundColor: blueShades[index % blueShades.length],
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default function MainDashboard() {
  const resourceRef = useRef(null);

  const handleGraphClick = () => {
    resourceRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="p-6 bg-[#f0faff] min-h-screen overflow-y-auto">
      {/* 📊 Graph section */}
      <div className="bg-white rounded-2xl shadow p-6 mb-8 w-full">
        <h2 className="text-xl font-semibold text-[#0283AE] mb-4">
          Resource Usage Overview
        </h2>

        <div
          onClick={handleGraphClick}
          className="cursor-pointer transition-transform hover:scale-[1.01]"
          title="Click to scroll to details"
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

      {/* 🔽 Scroll Target */}
      <div ref={resourceRef}></div>

      {/* 🔲 Resources Dashboard */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <Card title="Cloud Credit Usage (Monthly)">
          <table className="w-full text-sm text-gray-600">
            <thead>
              <tr>
                <th className="text-left">Provider</th>
                <th>Credits Used</th>
                <th>Remaining ($)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Amazon Web Services</td>
                <td>$1,200</td>
                <td>$3,800</td>
              </tr>
              <tr>
                <td>Microsoft Azure</td>
                <td>$950</td>
                <td>$4,050</td>
              </tr>
              <tr>
                <td>Google Cloud Platform</td>
                <td>$780</td>
                <td>$2,720</td>
              </tr>
            </tbody>
          </table>
        </Card>

        <Card title="Estimated Efficiency Score">
          <div className="text-center text-3xl font-bold text-[#3DCBFF]">89%</div>
          <p className="text-center text-xs mt-2 text-gray-500">
            Based on instance utilization & load balance
          </p>
        </Card>

        <Card title="Compute Resource Usage (VMs)">
          <ProgressBars values={[72, 65, 48, 30, 20]} />
        </Card>

        <Card title="Storage Utilization (Buckets)">
          <ProgressBars values={[83, 60, 43, 22]} />
        </Card>

        <Card title="Recent Logs & Alerts">
          <ul className="list-disc ml-4 text-sm text-blue-500">
            <li>AWS EC2 Instance Spike in us-east-1</li>
            <li>GCP: Unusual API Activity Detected</li>
            <li>Azure SQL: Storage nearing 90%</li>
          </ul>
        </Card>

        <Card title="Provisioned Tools">
          <ul className="list-disc ml-4 text-sm text-gray-700">
            <li>IAM Role Manager</li>
            <li>Serverless Monitoring</li>
            <li>Custom VPC Builder</li>
          </ul>
        </Card>

        <Card title="Upcoming Maintenance & Events">
          <ul className="text-sm text-gray-700 space-y-1">
            <li>AWS Lambda Patch Rollout - July 10</li>
            <li>GCP Network Maintenance - July 12</li>
            <li>Azure Firewall Update - July 15</li>
          </ul>
        </Card>
      </div>
    </div>
  );
}
