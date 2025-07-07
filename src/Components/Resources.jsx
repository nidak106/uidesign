import React from 'react';

// 🔷 Reusable Card component
const Card = ({ title, children }) => (
  <div className="bg-white rounded-2xl shadow p-4 w-full">
    <h3 className="text-sm font-semibold text-gray-700 mb-2">{title}</h3>
    {children}
  </div>
);

// 🟦 Reusable ProgressBars component
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

export default function Resources() {
  return (
    <div className="p-6 bg-[#f0faff] min-h-screen">
      <h2 className="text-xl font-semibold text-[#0283AE] mb-6">Cloud Resources Overview</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <Card title="Cloud Credit Usage (Monthly)">
          <table className="w-full text-sm text-gray-600">
            <thead>
              <tr><th className="text-left">Provider</th><th>Credits Used</th><th>Remaining ($)</th></tr>
            </thead>
            <tbody>
              <tr><td>Amazon Web Services</td><td>$1,200</td><td>$3,800</td></tr>
              <tr><td>Microsoft Azure</td><td>$950</td><td>$4,050</td></tr>
              <tr><td>Google Cloud Platform</td><td>$780</td><td>$2,720</td></tr>
            </tbody>
          </table>
        </Card>

        <Card title="Estimated Efficiency Score">
          <div className="text-center text-3xl font-bold text-[#3DCBFF]">89%</div>
          <p className="text-center text-xs mt-2 text-gray-500">Based on instance utilization & load balance</p>
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
