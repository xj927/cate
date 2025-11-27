import React, { useState } from 'react';
import { Post } from '../types';
import { Heart, MessageCircle, Share2, Plus } from 'lucide-react';

interface CommunityProps {
  posts: Post[];
  likePost: (postId: string) => void;
}

const Community: React.FC<CommunityProps> = ({ posts, likePost }) => {
  const [activeTab, setActiveTab] = useState<'feed' | 'groups' | 'events'>('feed');

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
          COMMUNITY
        </h1>
        <button className="neo-button" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Plus size={20} />
          NEW POST
        </button>
      </div>

      {/* Tabs */}
      <div style={{
        display: 'flex',
        gap: '8px',
        marginBottom: '32px',
        flexWrap: 'wrap'
      }}>
        {['feed', 'groups', 'events'].map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab as any)}
            style={{
              padding: '12px 24px',
              background: activeTab === tab ? '#FF005C' : '#FFFFFF',
              color: activeTab === tab ? '#FFFFFF' : '#000000',
              border: '3px solid #000000',
              fontWeight: 700,
              fontSize: '16px',
              textTransform: 'uppercase',
              cursor: 'pointer',
              boxShadow: activeTab === tab ? '4px 4px 0 #000000' : 'none'
            }}
          >
            {tab}
          </button>
        ))}
      </div>

      {activeTab === 'feed' && (
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 350px',
          gap: '32px'
        }} className="community-grid">
          {/* Posts Feed */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '24px'
          }}>
            {posts.map(post => (
              <div
                key={post.id}
                style={{
                  background: '#FFFFFF',
                  border: '4px solid #000000',
                  boxShadow: '6px 6px 0 #000000',
                  overflow: 'hidden'
                }}
              >
                {/* Post Header */}
                <div style={{
                  padding: '20px',
                  borderBottom: '3px solid #000000',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px'
                }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    border: '3px solid #000000',
                    overflow: 'hidden'
                  }}>
                    <img
                      src={post.avatar}
                      alt={post.author}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                      }}
                    />
                  </div>
                  <div>
                    <div style={{
                      fontWeight: 700,
                      fontSize: '16px',
                      textTransform: 'uppercase'
                    }}>
                      {post.author}
                    </div>
                    <div style={{ fontSize: '14px', color: '#666' }}>
                      {post.timestamp}
                    </div>
                  </div>
                </div>

                {/* Post Content */}
                <div style={{ padding: '20px' }}>
                  <p style={{
                    fontSize: '16px',
                    lineHeight: '1.6',
                    marginBottom: post.image ? '16px' : '0'
                  }}>
                    {post.content}
                  </p>
                </div>

                {/* Post Image */}
                {post.image && (
                  <div style={{
                    width: '100%',
                    maxHeight: '400px',
                    overflow: 'hidden',
                    borderTop: '3px solid #000000',
                    borderBottom: '3px solid #000000'
                  }}>
                    <img
                      src={post.image}
                      alt="Post"
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                      }}
                    />
                  </div>
                )}

                {/* Post Actions */}
                <div style={{
                  padding: '16px 20px',
                  display: 'flex',
                  gap: '16px'
                }}>
                  <button
                    onClick={() => likePost(post.id)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '8px 16px',
                      background: '#FF005C',
                      color: '#FFFFFF',
                      border: '3px solid #000000',
                      fontWeight: 700,
                      fontSize: '14px',
                      textTransform: 'uppercase',
                      cursor: 'pointer',
                      transition: 'all 0.1s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translate(2px, 2px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translate(0, 0)';
                    }}
                  >
                    <Heart size={18} />
                    {post.likes}
                  </button>
                  <button
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '8px 16px',
                      background: '#00F0FF',
                      color: '#000000',
                      border: '3px solid #000000',
                      fontWeight: 700,
                      fontSize: '14px',
                      textTransform: 'uppercase',
                      cursor: 'pointer',
                      transition: 'all 0.1s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translate(2px, 2px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translate(0, 0)';
                    }}
                  >
                    <MessageCircle size={18} />
                    {post.comments}
                  </button>
                  <button
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '8px 16px',
                      background: '#FFFFFF',
                      color: '#000000',
                      border: '3px solid #000000',
                      fontWeight: 700,
                      fontSize: '14px',
                      textTransform: 'uppercase',
                      cursor: 'pointer',
                      transition: 'all 0.1s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translate(2px, 2px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translate(0, 0)';
                    }}
                  >
                    <Share2 size={18} />
                    SHARE
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Sidebar */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '24px'
          }}>
            {/* Trending Topics */}
            <div style={{
              background: '#FFFF00',
              border: '4px solid #000000',
              boxShadow: '6px 6px 0 #000000',
              padding: '24px'
            }}>
              <h3 style={{
                fontSize: '20px',
                fontWeight: 700,
                textTransform: 'uppercase',
                marginBottom: '16px'
              }}>
                TRENDING TOPICS
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {['#CatCare', '#FelineHealth', '#AdoptDontShop', '#CatPhotography', '#KittenRescue'].map((tag, index) => (
                  <div
                    key={index}
                    style={{
                      padding: '12px',
                      background: '#FFFFFF',
                      border: '3px solid #000000',
                      fontWeight: 700,
                      cursor: 'pointer',
                      transition: 'all 0.1s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translate(2px, 2px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translate(0, 0)';
                    }}
                  >
                    {tag}
                  </div>
                ))}
              </div>
            </div>

            {/* Suggested Groups */}
            <div style={{
              background: '#00F0FF',
              border: '4px solid #000000',
              boxShadow: '6px 6px 0 #000000',
              padding: '24px'
            }}>
              <h3 style={{
                fontSize: '20px',
                fontWeight: 700,
                textTransform: 'uppercase',
                marginBottom: '16px'
              }}>
                SUGGESTED GROUPS
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {['Maine Coon Lovers', 'Senior Cat Care', 'DIY Cat Toys', 'Rescue Warriors'].map((group, index) => (
                  <div
                    key={index}
                    style={{
                      padding: '12px',
                      background: '#FFFFFF',
                      border: '3px solid #000000',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center'
                    }}
                  >
                    <span style={{ fontWeight: 700, fontSize: '14px' }}>{group}</span>
                    <button className="neo-button neo-button-white" style={{
                      padding: '6px 12px',
                      fontSize: '12px'
                    }}>
                      JOIN
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'groups' && (
        <div style={{
          background: '#00F0FF',
          border: '4px solid #000000',
          boxShadow: '8px 8px 0 #000000',
          padding: '48px',
          textAlign: 'center'
        }}>
          <h2 style={{
            fontSize: '32px',
            fontWeight: 700,
            textTransform: 'uppercase',
            marginBottom: '16px'
          }}>
            GROUPS COMING SOON
          </h2>
          <p style={{ fontSize: '16px' }}>
            Connect with other cat lovers in specialized groups
          </p>
        </div>
      )}

      {activeTab === 'events' && (
        <div style={{
          background: '#FFFF00',
          border: '4px solid #000000',
          boxShadow: '8px 8px 0 #000000',
          padding: '48px',
          textAlign: 'center'
        }}>
          <h2 style={{
            fontSize: '32px',
            fontWeight: 700,
            textTransform: 'uppercase',
            marginBottom: '16px'
          }}>
            EVENTS COMING SOON
          </h2>
          <p style={{ fontSize: '16px' }}>
            Discover local cat adoption events and meetups
          </p>
        </div>
      )}

      <style>{`
        @media (max-width: 1024px) {
          .community-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Community;
