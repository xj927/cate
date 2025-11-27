import React, { useState } from 'react';
import { Cat, CareTask } from '../types';
import { CheckCircle, Circle, Plus, Filter } from 'lucide-react';

interface CareScheduleProps {
  careTasks: CareTask[];
  cats: Cat[];
  toggleTaskComplete: (taskId: string) => void;
}

const CareSchedule: React.FC<CareScheduleProps> = ({ careTasks, cats, toggleTaskComplete }) => {
  const [filter, setFilter] = useState<'all' | 'pending' | 'completed'>('all');
  const [typeFilter, setTypeFilter] = useState<string>('all');

  const filteredTasks = careTasks.filter(task => {
    if (filter === 'pending' && task.completed) return false;
    if (filter === 'completed' && !task.completed) return false;
    if (typeFilter !== 'all' && task.type !== typeFilter) return false;
    return true;
  });

  const taskTypes = ['all', 'feeding', 'medication', 'grooming', 'playtime', 'litter', 'other'];

  return (
    <div style={{
      maxWidth: '1400px',
      margin: '0 auto',
      padding: '40px 20px'
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '32px',
        flexWrap: 'wrap',
        gap: '16px'
      }}>
        <h1 style={{
          fontSize: '48px',
          fontWeight: 700,
          textTransform: 'uppercase',
          letterSpacing: '2px'
        }}>
          CARE SCHEDULE
        </h1>
        <button className="neo-button" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Plus size={20} />
          ADD TASK
        </button>
      </div>

      {/* Filters */}
      <div style={{
        background: '#FFFFFF',
        border: '4px solid #000000',
        boxShadow: '6px 6px 0 #000000',
        padding: '24px',
        marginBottom: '32px'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          marginBottom: '16px',
          flexWrap: 'wrap'
        }}>
          <Filter size={24} />
          <span style={{
            fontSize: '18px',
            fontWeight: 700,
            textTransform: 'uppercase'
          }}>
            FILTERS
          </span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div>
            <div style={{
              fontSize: '12px',
              fontWeight: 700,
              textTransform: 'uppercase',
              marginBottom: '8px'
            }}>
              STATUS
            </div>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {['all', 'pending', 'completed'].map(f => (
                <button
                  key={f}
                  onClick={() => setFilter(f as any)}
                  style={{
                    padding: '8px 16px',
                    background: filter === f ? '#FF005C' : '#FFFFFF',
                    color: filter === f ? '#FFFFFF' : '#000000',
                    border: '3px solid #000000',
                    fontWeight: 700,
                    fontSize: '14px',
                    textTransform: 'uppercase',
                    cursor: 'pointer',
                    transition: 'all 0.1s ease'
                  }}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>
          <div>
            <div style={{
              fontSize: '12px',
              fontWeight: 700,
              textTransform: 'uppercase',
              marginBottom: '8px'
            }}>
              TYPE
            </div>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {taskTypes.map(type => (
                <button
                  key={type}
                  onClick={() => setTypeFilter(type)}
                  style={{
                    padding: '8px 16px',
                    background: typeFilter === type ? '#00F0FF' : '#FFFFFF',
                    color: '#000000',
                    border: '3px solid #000000',
                    fontWeight: 700,
                    fontSize: '14px',
                    textTransform: 'uppercase',
                    cursor: 'pointer',
                    transition: 'all 0.1s ease'
                  }}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Tasks List */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px'
      }}>
        {filteredTasks.length === 0 ? (
          <div style={{
            background: '#00F0FF',
            border: '4px solid #000000',
            boxShadow: '6px 6px 0 #000000',
            padding: '48px',
            textAlign: 'center'
          }}>
            <CheckCircle size={64} style={{ margin: '0 auto 16px' }} />
            <h2 style={{
              fontSize: '32px',
              fontWeight: 700,
              textTransform: 'uppercase',
              marginBottom: '8px'
            }}>
              NO TASKS FOUND
            </h2>
            <p style={{ fontSize: '16px' }}>
              Try adjusting your filters or add a new task
            </p>
          </div>
        ) : (
          filteredTasks.map(task => {
            const cat = cats.find(c => c.id === task.catId);
            return (
              <div
                key={task.id}
                style={{
                  background: '#FFFFFF',
                  border: '4px solid #000000',
                  boxShadow: '6px 6px 0 #000000',
                  padding: '24px',
                  display: 'grid',
                  gridTemplateColumns: 'auto 1fr auto',
                  gap: '24px',
                  alignItems: 'center',
                  opacity: task.completed ? 0.6 : 1
                }}
              >
                <button
                  onClick={() => toggleTaskComplete(task.id)}
                  style={{
                    width: '48px',
                    height: '48px',
                    background: task.completed ? '#00FF00' : '#FFFFFF',
                    border: '4px solid #000000',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.1s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                >
                  {task.completed ? <CheckCircle size={28} /> : <Circle size={28} />}
                </button>

                <div>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    marginBottom: '8px',
                    flexWrap: 'wrap'
                  }}>
                    <h3 style={{
                      fontSize: '24px',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      textDecoration: task.completed ? 'line-through' : 'none'
                    }}>
                      {task.title}
                    </h3>
                    <span style={{
                      padding: '4px 12px',
                      background: getTaskColor(task.type),
                      border: '2px solid #000000',
                      fontSize: '12px',
                      fontWeight: 700,
                      textTransform: 'uppercase'
                    }}>
                      {task.type}
                    </span>
                  </div>
                  <p style={{
                    fontSize: '16px',
                    marginBottom: '8px'
                  }}>
                    {task.description}
                  </p>
                  <div style={{
                    display: 'flex',
                    gap: '16px',
                    fontSize: '14px',
                    fontWeight: 700
                  }}>
                    <span>🐱 {cat?.name}</span>
                    <span>⏰ {task.time}</span>
                    <span>📅 {task.frequency}</span>
                  </div>
                </div>

                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px',
                  alignItems: 'flex-end'
                }}>
                  {task.completed && task.lastCompleted && (
                    <div style={{
                      padding: '6px 12px',
                      background: '#00FF00',
                      border: '2px solid #000000',
                      fontSize: '12px',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      textAlign: 'center'
                    }}>
                      ✓ COMPLETED
                    </div>
                  )}
                  <button className="neo-button neo-button-white" style={{
                    padding: '8px 16px',
                    fontSize: '12px'
                  }}>
                    EDIT
                  </button>
                </div>
              </div>
            );
          })
        )}
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

export default CareSchedule;
