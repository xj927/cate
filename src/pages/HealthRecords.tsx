import React, { useState } from 'react';
import { Cat, HealthRecord } from '../types';
import { Plus, Calendar, DollarSign, AlertCircle } from 'lucide-react';
import { format } from 'date-fns';

interface HealthRecordsProps {
  healthRecords: HealthRecord[];
  cats: Cat[];
  addHealthRecord: (record: Omit<HealthRecord, 'id'>) => void;
}

const HealthRecords: React.FC<HealthRecordsProps> = ({ healthRecords, cats, addHealthRecord }) => {
  const [selectedCat, setSelectedCat] = useState<string>('all');
  const [selectedType, setSelectedType] = useState<string>('all');

  const filteredRecords = healthRecords.filter(record => {
    if (selectedCat !== 'all' && record.catId !== selectedCat) return false;
    if (selectedType !== 'all' && record.type !== selectedType) return false;
    return true;
  });

  const recordTypes = ['all', 'vaccination', 'checkup', 'surgery', 'dental', 'emergency', 'other'];
  const totalCost = filteredRecords.reduce((sum, record) => sum + (record.cost || 0), 0);

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
          HEALTH RECORDS
        </h1>
        <button className="neo-button" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Plus size={20} />
          ADD RECORD
        </button>
      </div>

      {/* Stats */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '24px',
        marginBottom: '32px'
      }}>
        <div style={{
          background: '#FF005C',
          border: '4px solid #000000',
          boxShadow: '6px 6px 0 #000000',
          padding: '24px',
          color: '#FFFFFF'
        }}>
          <div style={{ fontSize: '14px', textTransform: 'uppercase', marginBottom: '8px' }}>
            TOTAL RECORDS
          </div>
          <div style={{ fontSize: '48px', fontWeight: 700 }}>{filteredRecords.length}</div>
        </div>

        <div style={{
          background: '#00F0FF',
          border: '4px solid #000000',
          boxShadow: '6px 6px 0 #000000',
          padding: '24px'
        }}>
          <div style={{ fontSize: '14px', textTransform: 'uppercase', marginBottom: '8px' }}>
            TOTAL COST
          </div>
          <div style={{ fontSize: '48px', fontWeight: 700 }}>${totalCost.toFixed(2)}</div>
        </div>

        <div style={{
          background: '#FFFF00',
          border: '4px solid #000000',
          boxShadow: '6px 6px 0 #000000',
          padding: '24px'
        }}>
          <div style={{ fontSize: '14px', textTransform: 'uppercase', marginBottom: '8px' }}>
            UPCOMING
          </div>
          <div style={{ fontSize: '48px', fontWeight: 700 }}>
            {healthRecords.filter(r => r.nextDue && new Date(r.nextDue) > new Date()).length}
          </div>
        </div>
      </div>

      {/* Filters */}
      <div style={{
        background: '#FFFFFF',
        border: '4px solid #000000',
        boxShadow: '6px 6px 0 #000000',
        padding: '24px',
        marginBottom: '32px'
      }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div>
            <div style={{
              fontSize: '12px',
              fontWeight: 700,
              textTransform: 'uppercase',
              marginBottom: '8px'
            }}>
              CAT
            </div>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              <button
                onClick={() => setSelectedCat('all')}
                style={{
                  padding: '8px 16px',
                  background: selectedCat === 'all' ? '#FF005C' : '#FFFFFF',
                  color: selectedCat === 'all' ? '#FFFFFF' : '#000000',
                  border: '3px solid #000000',
                  fontWeight: 700,
                  fontSize: '14px',
                  textTransform: 'uppercase',
                  cursor: 'pointer'
                }}
              >
                ALL
              </button>
              {cats.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCat(cat.id)}
                  style={{
                    padding: '8px 16px',
                    background: selectedCat === cat.id ? '#FF005C' : '#FFFFFF',
                    color: selectedCat === cat.id ? '#FFFFFF' : '#000000',
                    border: '3px solid #000000',
                    fontWeight: 700,
                    fontSize: '14px',
                    textTransform: 'uppercase',
                    cursor: 'pointer'
                  }}
                >
                  {cat.name}
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
              {recordTypes.map(type => (
                <button
                  key={type}
                  onClick={() => setSelectedType(type)}
                  style={{
                    padding: '8px 16px',
                    background: selectedType === type ? '#00F0FF' : '#FFFFFF',
                    color: '#000000',
                    border: '3px solid #000000',
                    fontWeight: 700,
                    fontSize: '14px',
                    textTransform: 'uppercase',
                    cursor: 'pointer'
                  }}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Records List */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px'
      }}>
        {filteredRecords.length === 0 ? (
          <div style={{
            background: '#00F0FF',
            border: '4px solid #000000',
            boxShadow: '6px 6px 0 #000000',
            padding: '48px',
            textAlign: 'center'
          }}>
            <AlertCircle size={64} style={{ margin: '0 auto 16px' }} />
            <h2 style={{
              fontSize: '32px',
              fontWeight: 700,
              textTransform: 'uppercase',
              marginBottom: '8px'
            }}>
              NO RECORDS FOUND
            </h2>
            <p style={{ fontSize: '16px' }}>
              Try adjusting your filters or add a new record
            </p>
          </div>
        ) : (
          filteredRecords.map(record => {
            const cat = cats.find(c => c.id === record.catId);
            return (
              <div
                key={record.id}
                style={{
                  background: '#FFFFFF',
                  border: '4px solid #000000',
                  boxShadow: '6px 6px 0 #000000',
                  padding: '24px'
                }}
              >
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr auto',
                  gap: '24px',
                  marginBottom: '16px'
                }}>
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
                        textTransform: 'uppercase'
                      }}>
                        {record.title}
                      </h3>
                      <span style={{
                        padding: '4px 12px',
                        background: getRecordColor(record.type),
                        color: record.type === 'vaccination' ? '#FFFFFF' : '#000000',
                        border: '2px solid #000000',
                        fontSize: '12px',
                        fontWeight: 700,
                        textTransform: 'uppercase'
                      }}>
                        {record.type}
                      </span>
                    </div>
                    <div style={{
                      display: 'flex',
                      gap: '16px',
                      fontSize: '14px',
                      fontWeight: 700,
                      marginBottom: '12px',
                      flexWrap: 'wrap'
                    }}>
                      <span>🐱 {cat?.name}</span>
                      <span>📅 {format(new Date(record.date), 'MMM dd, yyyy')}</span>
                      <span>👨‍⚕️ {record.veterinarian}</span>
                    </div>
                    <p style={{ fontSize: '16px', marginBottom: '12px' }}>
                      {record.notes}
                    </p>
                    <div style={{ fontSize: '14px', color: '#666' }}>
                      {record.clinic}
                    </div>
                  </div>

                  <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '8px',
                    alignItems: 'flex-end'
                  }}>
                    {record.cost && (
                      <div style={{
                        padding: '8px 16px',
                        background: '#00F0FF',
                        border: '3px solid #000000',
                        fontSize: '20px',
                        fontWeight: 700,
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px'
                      }}>
                        <DollarSign size={20} />
                        {record.cost.toFixed(2)}
                      </div>
                    )}
                    {record.nextDue && (
                      <div style={{
                        padding: '8px 16px',
                        background: '#FFFF00',
                        border: '3px solid #000000',
                        fontSize: '12px',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        textAlign: 'center'
                      }}>
                        <Calendar size={16} style={{ marginBottom: '4px' }} />
                        <div>NEXT DUE</div>
                        <div>{format(new Date(record.nextDue), 'MMM dd, yyyy')}</div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

const getRecordColor = (type: string): string => {
  const colors: Record<string, string> = {
    vaccination: '#FF005C',
    checkup: '#00F0FF',
    surgery: '#FF00FF',
    dental: '#FFFF00',
    emergency: '#FF0000',
    other: '#FFFFFF'
  };
  return colors[type] || '#FFFFFF';
};

export default HealthRecords;
