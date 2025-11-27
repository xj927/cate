import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Cat, CareTask, HealthRecord } from '../types';
import { ArrowLeft, Calendar, Heart, Edit } from 'lucide-react';
import { format } from 'date-fns';

interface CatDetailProps {
  cats: Cat[];
  careTasks: CareTask[];
  healthRecords: HealthRecord[];
}

const CatDetail: React.FC<CatDetailProps> = ({ cats, careTasks, healthRecords }) => {
  const { id } = useParams<{ id: string }>();
  const cat = cats.find(c => c.id === id);

  if (!cat) {
    return (
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '40px 20px',
        textAlign: 'center'
      }}>
        <h1 style={{ fontSize: '48px', fontWeight: 700, textTransform: 'uppercase' }}>
          CAT NOT FOUND
        </h1>
        <Link to="/cats" className="neo-button" style={{ marginTop: '24px', display: 'inline-block' }}>
          BACK TO CATS
        </Link>
      </div>
    );
  }

  const catTasks = careTasks.filter(task => task.catId === cat.id);
  const catHealthRecords = healthRecords.filter(record => record.catId === cat.id);

  return (
    <div style={{
      maxWidth: '1400px',
      margin: '0 auto',
      padding: '40px 20px'
    }}>
      <Link
        to="/cats"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          marginBottom: '24px',
          textDecoration: 'none',
          color: '#000000',
          fontWeight: 700,
          textTransform: 'uppercase'
        }}
      >
        <ArrowLeft size={20} />
        BACK TO CATS
      </Link>

      <div style={{
        display: 'grid',
        gridTemplateColumns: '400px 1fr',
        gap: '32px',
        marginBottom: '40px'
      }} className="cat-detail-grid">
        <div>
          <div style={{
            background: '#FFFFFF',
            border: '4px solid #000000',
            boxShadow: '8px 8px 0 #000000',
            overflow: 'hidden'
          }}>
            <div style={{
              width: '100%',
              height: '400px',
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
            <div style={{ padding: '24px' }}>
              <button className="neo-button" style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                <Edit size={18} />
                EDIT PROFILE
              </button>
            </div>
          </div>
        </div>

        <div>
          <div style={{
            background: '#00F0FF',
            border: '4px solid #000000',
            boxShadow: '8px 8px 0 #000000',
            padding: '32px',
            marginBottom: '24px'
          }}>
            <h1 style={{
              fontSize: '56px',
              fontWeight: 700,
              textTransform: 'uppercase',
              marginBottom: '16px',
              letterSpacing: '2px'
            }}>
              {cat.name}
            </h1>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
              gap: '16px'
            }}>
              <div>
                <div style={{
                  fontSize: '12px',
                  textTransform: 'uppercase',
                  fontWeight: 700,
                  marginBottom: '4px'
                }}>
                  BREED
                </div>
                <div style={{ fontSize: '18px', fontWeight: 700 }}>{cat.breed}</div>
              </div>
              <div>
                <div style={{
                  fontSize: '12px',
                  textTransform: 'uppercase',
                  fontWeight: 700,
                  marginBottom: '4px'
                }}>
                  AGE
                </div>
                <div style={{ fontSize: '18px', fontWeight: 700 }}>{cat.age} years</div>
              </div>
              <div>
                <div style={{
                  fontSize: '12px',
                  textTransform: 'uppercase',
                  fontWeight: 700,
                  marginBottom: '4px'
                }}>
                  WEIGHT
                </div>
                <div style={{ fontSize: '18px', fontWeight: 700 }}>{cat.weight} kg</div>
              </div>
              <div>
                <div style={{
                  fontSize: '12px',
                  textTransform: 'uppercase',
                  fontWeight: 700,
                  marginBottom: '4px'
                }}>
                  COLOR
                </div>
                <div style={{ fontSize: '18px', fontWeight: 700 }}>{cat.color}</div>
              </div>
            </div>
          </div>

          <div style={{
            background: '#FFFFFF',
            border: '4px solid #000000',
            boxShadow: '8px 8px 0 #000000',
            padding: '24px',
            marginBottom: '24px'
          }}>
            <h3 style={{
              fontSize: '20px',
              fontWeight: 700,
              textTransform: 'uppercase',
              marginBottom: '16px'
            }}>
              DETAILS
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div>
                <div style={{
                  fontSize: '12px',
                  textTransform: 'uppercase',
                  fontWeight: 700,
                  marginBottom: '4px'
                }}>
                  MICROCHIP ID
                </div>
                <div style={{ fontSize: '16px' }}>{cat.microchipId}</div>
              </div>
              <div>
                <div style={{
                  fontSize: '12px',
                  textTransform: 'uppercase',
                  fontWeight: 700,
                  marginBottom: '4px'
                }}>
                  ADOPTION DATE
                </div>
                <div style={{ fontSize: '16px' }}>{format(new Date(cat.adoptionDate), 'MMMM dd, yyyy')}</div>
              </div>
              <div>
                <div style={{
                  fontSize: '12px',
                  textTransform: 'uppercase',
                  fontWeight: 700,
                  marginBottom: '8px'
                }}>
                  PERSONALITY
                </div>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  {cat.personality.map((trait, index) => (
                    <span
                      key={index}
                      style={{
                        padding: '6px 12px',
                        background: index % 3 === 0 ? '#FF005C' : index % 3 === 1 ? '#00F0FF' : '#FFFF00',
                        color: index % 3 === 0 ? '#FFFFFF' : '#000000',
                        border: '2px solid #000000',
                        fontSize: '14px',
                        fontWeight: 700,
                        textTransform: 'uppercase'
                      }}
                    >
                      {trait}
                    </span>
                  ))}
                </div>
              </div>
              {cat.medicalNotes && (
                <div>
                  <div style={{
                    fontSize: '12px',
                    textTransform: 'uppercase',
                    fontWeight: 700,
                    marginBottom: '8px'
                  }}>
                    MEDICAL NOTES
                  </div>
                  <div style={{
                    background: '#FF005C',
                    color: '#FFFFFF',
                    padding: '12px',
                    border: '3px solid #000000',
                    fontSize: '14px',
                    fontWeight: 700
                  }}>
                    ⚠ {cat.medicalNotes}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))',
        gap: '32px'
      }}>
        <div>
          <h2 style={{
            fontSize: '32px',
            fontWeight: 700,
            textTransform: 'uppercase',
            marginBottom: '20px',
            display: 'flex',
            alignItems: 'center',
            gap: '12px'
          }}>
            <Calendar size={32} />
            CARE TASKS
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {catTasks.length === 0 ? (
              <div style={{
                background: '#FFFFFF',
                border: '3px solid #000000',
                padding: '24px',
                textAlign: 'center'
              }}>
                <p style={{ fontWeight: 700, textTransform: 'uppercase' }}>
                  NO TASKS SCHEDULED
                </p>
              </div>
            ) : (
              catTasks.map(task => (
                <div
                  key={task.id}
                  style={{
                    background: '#FFFFFF',
                    border: '3px solid #000000',
                    boxShadow: '4px 4px 0 #000000',
                    padding: '16px'
                  }}
                >
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'start',
                    marginBottom: '8px'
                  }}>
                    <div>
                      <div style={{
                        fontWeight: 700,
                        fontSize: '18px',
                        textTransform: 'uppercase',
                        marginBottom: '4px'
                      }}>
                        {task.title}
                      </div>
                      <div style={{ fontSize: '14px', marginBottom: '8px' }}>
                        {task.description}
                      </div>
                    </div>
                    {task.completed && (
                      <div style={{
                        background: '#00FF00',
                        color: '#000000',
                        padding: '4px 8px',
                        border: '2px solid #000000',
                        fontSize: '12px',
                        fontWeight: 700,
                        textTransform: 'uppercase'
                      }}>
                        ✓ DONE
                      </div>
                    )}
                  </div>
                  <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
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
                    <span style={{
                      padding: '4px 12px',
                      background: '#FFFFFF',
                      border: '2px solid #000000',
                      fontSize: '12px',
                      fontWeight: 700,
                      textTransform: 'uppercase'
                    }}>
                      {task.time}
                    </span>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        <div>
          <h2 style={{
            fontSize: '32px',
            fontWeight: 700,
            textTransform: 'uppercase',
            marginBottom: '20px',
            display: 'flex',
            alignItems: 'center',
            gap: '12px'
          }}>
            <Heart size={32} />
            HEALTH RECORDS
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {catHealthRecords.length === 0 ? (
              <div style={{
                background: '#FFFFFF',
                border: '3px solid #000000',
                padding: '24px',
                textAlign: 'center'
              }}>
                <p style={{ fontWeight: 700, textTransform: 'uppercase' }}>
                  NO HEALTH RECORDS
                </p>
              </div>
            ) : (
              catHealthRecords.slice(0, 5).map(record => (
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
                    fontSize: '18px',
                    textTransform: 'uppercase',
                    marginBottom: '4px'
                  }}>
                    {record.title}
                  </div>
                  <div style={{ fontSize: '14px', marginBottom: '8px' }}>
                    {format(new Date(record.date), 'MMM dd, yyyy')} • {record.veterinarian}
                  </div>
                  <div style={{ fontSize: '14px', marginBottom: '12px' }}>
                    {record.notes}
                  </div>
                  <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                    <span style={{
                      padding: '4px 12px',
                      background: '#FF005C',
                      color: '#FFFFFF',
                      border: '2px solid #000000',
                      fontSize: '12px',
                      fontWeight: 700,
                      textTransform: 'uppercase'
                    }}>
                      {record.type}
                    </span>
                    {record.nextDue && (
                      <span style={{
                        padding: '4px 12px',
                        background: '#FFFF00',
                        border: '2px solid #000000',
                        fontSize: '12px',
                        fontWeight: 700,
                        textTransform: 'uppercase'
                      }}>
                        DUE: {format(new Date(record.nextDue), 'MMM dd, yyyy')}
                      </span>
                    )}
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .cat-detail-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
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

export default CatDetail;
