import React from 'react';
import { BookOpen, Video, FileText, ExternalLink } from 'lucide-react';

const Resources: React.FC = () => {
  const categories = [
    {
      title: 'NUTRITION',
      color: '#FF005C',
      resources: [
        { title: 'Complete Guide to Cat Nutrition', type: 'article' },
        { title: 'Homemade Cat Food Recipes', type: 'video' },
        { title: 'Understanding Food Allergies', type: 'article' },
        { title: 'Feeding Schedule Best Practices', type: 'guide' }
      ]
    },
    {
      title: 'HEALTH & WELLNESS',
      color: '#00F0FF',
      resources: [
        { title: 'Common Cat Health Issues', type: 'article' },
        { title: 'Vaccination Schedule Guide', type: 'guide' },
        { title: 'Dental Care for Cats', type: 'video' },
        { title: 'Senior Cat Care Tips', type: 'article' }
      ]
    },
    {
      title: 'BEHAVIOR',
      color: '#FFFF00',
      resources: [
        { title: 'Understanding Cat Body Language', type: 'video' },
        { title: 'Litter Box Training', type: 'guide' },
        { title: 'Dealing with Aggression', type: 'article' },
        { title: 'Enrichment Activities', type: 'video' }
      ]
    },
    {
      title: 'GROOMING',
      color: '#FF00FF',
      resources: [
        { title: 'Brushing Techniques', type: 'video' },
        { title: 'Nail Trimming Guide', type: 'guide' },
        { title: 'Bathing Your Cat', type: 'article' },
        { title: 'Managing Hairballs', type: 'article' }
      ]
    }
  ];

  const emergencyContacts = [
    { name: 'ASPCA Poison Control', phone: '(888) 426-4435' },
    { name: 'Pet Poison Helpline', phone: '(855) 764-7661' },
    { name: '24/7 Emergency Vet', phone: '(555) 123-4567' }
  ];

  return (
    <div style={{
      maxWidth: '1400px',
      margin: '0 auto',
      padding: '40px 20px'
    }}>
      <h1 style={{
        fontSize: '48px',
        fontWeight: 700,
        textTransform: 'uppercase',
        letterSpacing: '2px',
        marginBottom: '32px'
      }}>
        RESOURCES
      </h1>

      {/* Emergency Contacts */}
      <div style={{
        background: '#FF005C',
        border: '4px solid #000000',
        boxShadow: '8px 8px 0 #000000',
        padding: '32px',
        marginBottom: '40px',
        color: '#FFFFFF'
      }}>
        <h2 style={{
          fontSize: '32px',
          fontWeight: 700,
          textTransform: 'uppercase',
          marginBottom: '20px'
        }}>
          ⚠ EMERGENCY CONTACTS
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '16px'
        }}>
          {emergencyContacts.map((contact, index) => (
            <div
              key={index}
              style={{
                background: '#000000',
                border: '3px solid #FFFFFF',
                padding: '16px'
              }}
            >
              <div style={{
                fontSize: '16px',
                fontWeight: 700,
                textTransform: 'uppercase',
                marginBottom: '8px'
              }}>
                {contact.name}
              </div>
              <div style={{ fontSize: '20px', fontWeight: 700 }}>
                {contact.phone}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Resource Categories */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
        gap: '32px'
      }}>
        {categories.map((category, index) => (
          <div
            key={index}
            style={{
              background: '#FFFFFF',
              border: '4px solid #000000',
              boxShadow: '6px 6px 0 #000000',
              overflow: 'hidden'
            }}
          >
            <div style={{
              background: category.color,
              padding: '20px',
              borderBottom: '4px solid #000000'
            }}>
              <h3 style={{
                fontSize: '24px',
                fontWeight: 700,
                textTransform: 'uppercase',
                display: 'flex',
                alignItems: 'center',
                gap: '12px'
              }}>
                <BookOpen size={28} />
                {category.title}
              </h3>
            </div>
            <div style={{ padding: '20px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {category.resources.map((resource, rIndex) => (
                  <div
                    key={rIndex}
                    style={{
                      padding: '16px',
                      border: '3px solid #000000',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      cursor: 'pointer',
                      transition: 'all 0.1s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = category.color;
                      e.currentTarget.style.transform = 'translate(2px, 2px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = '#FFFFFF';
                      e.currentTarget.style.transform = 'translate(0, 0)';
                    }}
                  >
                    <div>
                      <div style={{
                        fontWeight: 700,
                        fontSize: '14px',
                        marginBottom: '4px'
                      }}>
                        {resource.title}
                      </div>
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        fontSize: '12px',
                        textTransform: 'uppercase'
                      }}>
                        {resource.type === 'video' && <Video size={14} />}
                        {resource.type === 'article' && <FileText size={14} />}
                        {resource.type === 'guide' && <BookOpen size={14} />}
                        {resource.type}
                      </div>
                    </div>
                    <ExternalLink size={20} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Tips */}
      <div style={{
        marginTop: '40px',
        background: '#00F0FF',
        border: '4px solid #000000',
        boxShadow: '8px 8px 0 #000000',
        padding: '32px'
      }}>
        <h2 style={{
          fontSize: '32px',
          fontWeight: 700,
          textTransform: 'uppercase',
          marginBottom: '20px'
        }}>
          💡 QUICK TIPS
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '16px'
        }}>
          {[
            'Cats need fresh water daily - consider a water fountain',
            'Play with your cat for at least 15 minutes twice a day',
            'Clean litter boxes daily for optimal hygiene',
            'Regular vet checkups prevent serious health issues',
            'Provide vertical spaces for climbing and perching',
            'Keep toxic plants away from your cats'
          ].map((tip, index) => (
            <div
              key={index}
              style={{
                background: '#FFFFFF',
                border: '3px solid #000000',
                padding: '16px',
                fontWeight: 700,
                fontSize: '14px'
              }}
            >
              {tip}
            </div>
          ))}
        </div>
      </div>

      {/* Downloadable Guides */}
      <div style={{
        marginTop: '40px',
        background: '#FFFFFF',
        border: '4px solid #000000',
        boxShadow: '8px 8px 0 #000000',
        padding: '32px'
      }}>
        <h2 style={{
          fontSize: '32px',
          fontWeight: 700,
          textTransform: 'uppercase',
          marginBottom: '20px'
        }}>
          📥 DOWNLOADABLE GUIDES
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '16px'
        }}>
          {[
            'New Cat Owner Checklist',
            'Medication Schedule Template',
            'Emergency Preparedness Guide',
            'Cat Behavior Journal'
          ].map((guide, index) => (
            <button
              key={index}
              className="neo-button"
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px'
              }}
            >
              <FileText size={18} />
              {guide}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Resources;
