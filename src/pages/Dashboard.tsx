import React from 'react';
import { Link } from 'react-router-dom';
import { Cat, CareTask, HealthRecord } from '../types';
import { Calendar, Heart, AlertCircle, CheckCircle, Clock } from 'lucide-react';
import { format } from 'date-fns';

interface DashboardProps {
  cats: Cat[];
  careTasks: CareTask[];
  healthRecords: HealthRecord[];
}

const Dashboard: React.FC<DashboardProps> = ({ cats, careTasks, healthRecords }) => {
  const todayTasks = careTasks.filter(task => !task.completed);
  const completedTasks = careTasks.filter(task => task.completed);
  const upcomingVaccinations = healthRecords
    .filter(record => record.nextDue && new Date(record.nextDue) > new Date())
    .sort((a, b) => new Date(a.nextDue!).getTime() - new Date(b.nextDue!).getTime())
    .slice(0, 3);

  return (
    <div style={{
      maxWidth: '1400px',
      margin: '0 auto',
      padding: '40px 20px'
    }}>
      {/* Hero Section */}
      <div style={{
        background: '#00F0FF',
        border: '4px solid #000000',
        boxShadow: '8px 8px 0 #000000',
        padding: '40px',
        marginBottom: '40px'
      }}>
        <h1 style={{
          fontSize: '48px',
          fontWeight: 700,
          textTransform: 'uppercase',
          marginBottom: '16px',
          letterSpacing: '2px'
        }}>
          WELCOME BACK!
        </h1>
        <p style={{
          fontSize: '18px',
          marginBottom: '24px'
        }}>
          You have {todayTasks.length} tasks pending today
        </p>
        <div style={{
          display: 'flex',
          gap: '16px',
          flexWrap: 'wrap'
        }}>
          <Link to="/schedule" className="neo-button">
            VIEW SCHEDULE
          </Link>
          <Link to="/cats" className="neo-button neo-button-white">
            MY CATS
          </Link>
        </div>
      </div>

      {/* Stats Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '24px',
        marginBottom: '40px'
      }}>
        <div style={{
          background: '#FF005C',
          border: '4px solid #000000',
          boxShadow: '6px 6px 0 #000000',
          padding: '24px',
          color: '#FFFFFF'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
            <div style={{
              width: '48px',
              height: '48px',
              background: '#000000',
              border: '3px solid #FFFFFF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Calendar size={24} />
            </div>
            <div>
              <div style={{ fontSize: '32px', fontWeight: 700 }}>{todayTasks.length}</div>
              <div style={{ fontSize: '14px', textTransform: 'uppercase' }}>PENDING TASKS</div>
            </div>
          </div>
        </div>

        <div style={{
          background: '#00F0FF',
          border: '4px solid #000000',
          boxShadow: '6px 6px 0 #000000',
          padding: '24px',
          color: '#000000'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
            <div style={{
              width: '48px',
              height: '48px',
              background: '#000000',
              border: '3px solid #000000',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <CheckCircle size={24} color="#FFFFFF" />
            </div>
            <div>
              <div style={{ fontSize: '32px', fontWeight: 700 }}>{completedTasks.length}</div>
              <div style={{ fontSize: '14px', textTransform: 'uppercase' }}>COMPLETED TODAY</div>
            </div>
          </div>
        </div>

        <div style={{
          background: '#FFFFFF',
          border: '4px solid #000000',
          boxShadow: '6px 6px 0 #000000',
          padding: '24px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
            <div style={{
              width: '48px',
              height: '48px',
              background: '#FF005C',
              border: '3px solid #000000',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Heart size={24} color="#FFFFFF" />
            </div>
            <div>
              <div style={{ fontSize: '32px', fontWeight: 700 }}>{cats.length}</div>
              <div style={{ fontSize: '14px', textTransform: 'uppercase' }}>CATS IN CARE</div>
            </div>
          </div>
        </div>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
        gap: '32px'
      }}>
        {/* Today's Tasks */}
        <div>
          <h2 style={{
            fontSize: '28px',
            fontWeight: 700,
            textTransform: 'uppercase',
            marginBottom: '20px',
            display: 'flex',
            alignItems: 'center',
            gap: '12px'
          }}>
            <Clock size={28} />
            TODAY'S TASKS
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {todayTasks.length === 0 ? (
              <div style={{
                background: '#00F0FF',
                border: '3px solid #000000',
                padding: '24px',
                textAlign: 'center'
              }}>
                <CheckCircle size={48} style={{ margin: '0 auto 12px' }} />
                <p style={{ fontWeight: 700, textTransform: 'uppercase' }}>
                  ALL TASKS COMPLETED!
                </p>
              </div>
            ) : (
              todayTasks.slice(0, 5).map(task => {
                const cat = cats.find(c => c.id === task.catId);
                return (
                  <div
                    key={task.id}
                    style={{
                      background: '#FFFFFF',
                      border: '3px solid #000000',
                      boxShadow: '4px 4px 0 #000000',
                      padding: '16px',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center'
                    }}
                  >
                    <div style={{ flex: 1 }}>
                      <div style={{
                        fontWeight: 700,
                        fontSize: '16px',
                        marginBottom: '4px',
                        textTransform: 'uppercase'
                      }}>
                        {task.title}
                      </div>
                      <div style={{ fontSize: '14px', marginBottom: '8px' }}>
                        {cat?.name} • {task.time}
                      </div>
                      <div style={{
                        display: 'inline-block',
                        padding: '4px 8px',
                        background: getTaskColor(task.type),
                        border: '2px solid #000000',
                        fontSize: '12px',
                        fontWeight: 700,
                        textTransform: 'uppercase'
                      }}>
                        {task.type}
                      </div>
                    </div>
                  </div>
                );
              })
            )}
            {todayTasks.length > 5 && (
              <Link to="/schedule" className="neo-button neo-button-secondary" style={{ width: '100%' }}>
                VIEW ALL TASKS
              </Link>
            )}
          </div>
        </div>

        {/* Upcoming Health */}
        <div>
          <h2 style={{
            fontSize: '28px',
            fontWeight: 700,
            textTransform: 'uppercase',
            marginBottom: '20px',
            display: 'flex',
            alignItems: 'center',
            gap: '12px'
          }}>
            <AlertCircle size={28} />
            UPCOMING HEALTH
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {upcomingVaccinations.length === 0 ? (
              <div style={{
                background: '#FFFFFF',
                border: '3px solid #000000',
                padding: '24px',
                textAlign: 'center'
              }}>
                <Heart size={48} style={{ margin: '0 auto 12px' }} />
                <p style={{ fontWeight: 700, textTransform: 'uppercase' }}>
                  NO UPCOMING APPOINTMENTS
                </p>
              </div>
            ) : (
              upcomingVaccinations.map(record => {
                const cat = cats.find(c => c.id === record.catId);
                return (
                  <div
                    key={record.id}
                    style={{
                      background: '#FFFFFF',
                      border: '3px solid #000000',
                      boxShadow: '4px 4px 0 #000000',
                      padding: '16px'
                    }}
                  >
                    <div style={{
                      fontWeight: 700,
                      fontSize: '16px',
                      marginBottom: '4px',
                      textTransform: 'uppercase'
                    }}>
                      {record.title}
                    </div>
                    <div style={{ fontSize: '14px', marginBottom: '8px' }}>
                      {cat?.name} • Due: {format(new Date(record.nextDue!), 'MMM dd, yyyy')}
                    </div>
                    <div style={{
                      display: 'inline-block',
                      padding: '4px 8px',
                      background: '#FF005C',
                      color: '#FFFFFF',
                      border: '2px solid #000000',
                      fontSize: '12px',
                      fontWeight: 700,
                      textTransform: 'uppercase'
                    }}>
                      {record.type}
                    </div>
                  </div>
                );
              })
            )}
            <Link to="/health" className="neo-button" style={{ width: '100%' }}>
              VIEW HEALTH RECORDS
            </Link>
          </div>
        </div>
      </div>

      {/* My Cats Quick View */}
      <div style={{ marginTop: '40px' }}>
        <h2 style={{
          fontSize: '28px',
          fontWeight: 700,
          textTransform: 'uppercase',
          marginBottom: '20px'
        }}>
          MY CATS
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '24px'
        }}>
          {cats.map(cat => (
            <Link
              key={cat.id}
              to={`/cats/${cat.id}`}
              style={{
                textDecoration: 'none',
                color: '#000000'
              }}
            >
              <div style={{
                background: '#FFFFFF',
                border: '4px solid #000000',
                boxShadow: '6px 6px 0 #000000',
                overflow: 'hidden',
                transition: 'all 0.1s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translate(2px, 2px)';
                e.currentTarget.style.boxShadow = '4px 4px 0 #000000';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translate(0, 0)';
                e.currentTarget.style.boxShadow = '6px 6px 0 #000000';
              }}>
                <div style={{
                  width: '100%',
                  height: '200px',
                  overflow: 'hidden',
                  borderBottom: '4px solid #000000'
                }}>
                  <img
                    src={cat.imageUrl}
                    alt={cat.name}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                  />
                </div>
                <div style={{ padding: '20px' }}>
                  <h3 style={{
                    fontSize: '24px',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    marginBottom: '8px'
                  }}>
                    {cat.name}
                  </h3>
                  <p style={{ fontSize: '14px', marginBottom: '12px' }}>
                    {cat.breed} • {cat.age} years old
                  </p>
                  <div style={{
                    display: 'inline-block',
                    padding: '4px 12px',
                    background: '#00F0FF',
                    border: '2px solid #000000',
                    fontSize: '12px',
                    fontWeight: 700,
                    textTransform: 'uppercase'
                  }}>
                    {cat.weight} kg
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

const getTaskColor = (type: string): string => {
  const colors: Record<string, string> = {
    feeding: '#00F0FF',
    medication: '#FF005C',
    grooming: '#FFFF00',
    playtime: '#00FF00',
    litter: '#FF00FF',
    other: '#FFFFFF'
  };
  return colors[type] || '#FFFFFF';
};

export default Dashboard;
