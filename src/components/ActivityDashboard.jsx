import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Activity, Code, TrendingUp, Clock } from 'lucide-react'
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts'

const ActivityDashboard = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const languageData = [
    { name: 'Python', value: 35, color: '#00D9FF' },
    { name: 'C/C++', value: 25, color: '#39FF14' },
    { name: 'JavaScript', value: 20, color: '#B429FF' },
    { name: 'Java', value: 15, color: '#FF6B6B' },
    { name: 'Other', value: 5, color: '#94A3B8' },
  ]

  const commitData = [
    { day: 'Mon', commits: 12 },
    { day: 'Tue', commits: 19 },
    { day: 'Wed', commits: 8 },
    { day: 'Thu', commits: 15 },
    { day: 'Fri', commits: 22 },
    { day: 'Sat', commits: 10 },
    { day: 'Sun', commits: 7 },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-heading font-bold mb-12 text-center gradient-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Live Activity Dashboard
        </motion.h2>

        <motion.div
          ref={ref}
          className="glass rounded-2xl p-6 md:p-8 lg:p-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Current Status */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-3 h-3 bg-neon-green rounded-full animate-pulse"></div>
              <h3 className="text-xl font-semibold">Currently Working On</h3>
            </div>
            <p className="text-text-secondary ml-6">
              Smart Traffic Monitoring System (V2I Communications) - Real-time IoT framework optimization
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {/* Stats Cards */}
            <motion.div
              className="glass rounded-xl p-6 text-center"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Activity className="text-neon-blue mx-auto mb-2" size={32} />
              <div className="text-3xl font-bold gradient-text mb-1">127</div>
              <div className="text-text-secondary text-sm">Total Contributions</div>
            </motion.div>

            <motion.div
              className="glass rounded-xl p-6 text-center"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Code className="text-neon-green mx-auto mb-2" size={32} />
              <div className="text-3xl font-bold gradient-text mb-1">42</div>
              <div className="text-text-secondary text-sm">Repositories</div>
            </motion.div>

            <motion.div
              className="glass rounded-xl p-6 text-center"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <TrendingUp className="text-neon-purple mx-auto mb-2" size={32} />
              <div className="text-3xl font-bold gradient-text mb-1">15</div>
              <div className="text-text-secondary text-sm">Day Streak</div>
            </motion.div>

            <motion.div
              className="glass rounded-xl p-6 text-center"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <Clock className="text-neon-blue mx-auto mb-2" size={32} />
              <div className="text-3xl font-bold gradient-text mb-1">8.5h</div>
              <div className="text-text-secondary text-sm">This Week</div>
            </motion.div>
          </div>

          {/* Charts Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Commit Activity */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Weekly Commit Activity</h4>
              <ResponsiveContainer width="100%" height={200}>
                <BarChart data={commitData}>
                  <XAxis dataKey="day" stroke="#94A3B8" />
                  <YAxis stroke="#94A3B8" />
                  <Tooltip
                    contentStyle={{
                      background: '#1A1F3A',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      borderRadius: '8px',
                    }}
                  />
                  <Bar dataKey="commits" fill="#00D9FF" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Language Distribution */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Most Used Languages</h4>
              <ResponsiveContainer width="100%" height={200}>
                <PieChart>
                  <Pie
                    data={languageData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {languageData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      background: '#1A1F3A',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      borderRadius: '8px',
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Note */}
          <div className="mt-6 text-center text-sm text-text-secondary">
            <p>Note: Using mock data for demonstration. Real GitHub API integration available.</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ActivityDashboard

