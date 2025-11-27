import React from 'react';
import { Link } from 'react-router-dom';
import { Cat } from '../types';
import { Plus } from 'lucide-react';

interface CatProfilesProps {
  cats: Cat[];
}

const CatProfiles: React.FC<CatProfilesProps> = ({ cats }) => {
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
          MY CATS
        </h1>
        <button className="neo-button" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Plus size={20} />
          ADD CAT
        </button>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
        gap: '32px'
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
              boxShadow: '8px 8px 0 #000000',
              overflow: 'hidden',
              transition: 'all 0.1s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translate(3px, 3px)';
              e.currentTarget.style.boxShadow = '5px 5px 0 #000000';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translate(0, 0)';
              e.currentTarget.style.boxShadow = '8px 8px 0 #000000';
            }}>
              <div style={{
                width: '100%',
                height: '300px',
                overflow: 'hidden',
                borderBottom: '4px solid #000000',
                position: 'relative'
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
                <div style={{
                  position: 'absolute',
                  top: '16px',
                  right: '16px',
                  background: '#FF005C',
                  color: '#FFFFFF',
                  padding: '8px 16px',
                  border: '3px solid #000000',
                  fontWeight: 700,
                  fontSize: '14px',
                  textTransform: 'uppercase'
                }}>
                  {cat.age} YRS
                </div>
              </div>
              <div style={{ padding: '24px' }}>
                <h2 style={{
                  fontSize: '32px',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  marginBottom: '12px',
                  letterSpacing: '1px'
                }}>
                  {cat.name}
                </h2>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '12px',
                  marginBottom: '16px'
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
                    <div style={{ fontSize: '14px' }}>{cat.breed}</div>
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
                    <div style={{ fontSize: '14px' }}>{cat.weight} kg</div>
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
                    <div style={{ fontSize: '14px' }}>{cat.color}</div>
                  </div>
                  <div>
                    <div style={{
                      fontSize: '12px',
                      textTransform: 'uppercase',
                      fontWeight: 700,
                      marginBottom: '4px'
                    }}>
                      MICROCHIP
                    </div>
                    <div style={{ fontSize: '14px' }}>{cat.microchipId}</div>
                  </div>
                </div>
                <div style={{ marginBottom: '16px' }}>
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
                          padding: '4px 12px',
                          background: index % 2 === 0 ? '#00F0FF' : '#FFFF00',
                          border: '2px solid #000000',
                          fontSize: '12px',
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
                  <div style={{
                    background: '#FF005C',
                    color: '#FFFFFF',
                    padding: '12px',
                    border: '3px solid #000000',
                    fontSize: '12px',
                    fontWeight: 700,
                    textTransform: 'uppercase'
                  }}>
                    ⚠ {cat.medicalNotes}
                  </div>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CatProfiles;
