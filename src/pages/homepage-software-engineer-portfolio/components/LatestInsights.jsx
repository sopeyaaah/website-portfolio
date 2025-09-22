import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const LatestInsights = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of React: Server Components and Concurrent Features",
      excerpt: "Exploring the latest React 18 features and how Server Components are revolutionizing the way we build web applications. A deep dive into concurrent rendering and its performance benefits.",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=250&fit=crop",
      category: "React",
      readTime: "8 min read",
      publishDate: "2025-01-15",
      tags: ["React", "Performance", "Web Development"],
      views: "2.3K",
      likes: "156"
    },
    {
      id: 2,
      title: "Building Scalable APIs with Node.js and GraphQL",
      excerpt: "Best practices for designing and implementing GraphQL APIs that can handle millions of requests. Learn about schema design, query optimization, and caching strategies.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=250&fit=crop",
      category: "Backend",
      readTime: "12 min read",
      publishDate: "2025-01-08",
      tags: ["Node.js", "GraphQL", "API Design"],
      views: "1.8K",
      likes: "124"
    },
    {
      id: 3,
      title: "AI-Driven Development: How Machine Learning is Changing Code",
      excerpt: "An exploration of how AI tools like GitHub Copilot and ChatGPT are transforming the development workflow. Tips for integrating AI assistance while maintaining code quality.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop",
      category: "AI/ML",
      readTime: "10 min read",
      publishDate: "2025-01-01",
      tags: ["AI", "Machine Learning", "Developer Tools"],
      views: "3.1K",
      likes: "287"
    }
  ];

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date?.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const getCategoryColor = (category) => {
    const colors = {
      'React': 'bg-blue-500',
      'Backend': 'bg-green-500',
      'AI/ML': 'bg-purple-500'
    };
    return colors?.[category] || 'bg-gray-500';
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
            <Icon name="BookOpen" size={16} className="mr-2" />
            Knowledge Sharing
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
            Latest Insights
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Thoughts on emerging technologies, best practices, and the future of software development
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {blogPosts?.map((post, index) => (
            <article
              key={post?.id}
              className="bg-card rounded-2xl shadow-brand-md border border-border overflow-hidden hover:shadow-brand-lg transition-all duration-300 group"
            >
              {/* Post Image */}
              <div className="relative overflow-hidden">
                <Image
                  src={post?.image}
                  alt={post?.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 ${getCategoryColor(post?.category)} text-white text-xs font-medium rounded-full`}>
                    {post?.category}
                  </span>
                </div>
              </div>

              {/* Post Content */}
              <div className="p-6">
                <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-3">
                  <div className="flex items-center space-x-1">
                    <Icon name="Calendar" size={14} />
                    <span>{formatDate(post?.publishDate)}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Icon name="Clock" size={14} />
                    <span>{post?.readTime}</span>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-primary mb-3 group-hover:text-accent transition-colors duration-200">
                  {post?.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed mb-4">
                  {post?.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {post?.tags?.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Post Stats */}
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Icon name="Eye" size={14} />
                      <span>{post?.views}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Icon name="Heart" size={14} />
                      <span>{post?.likes}</span>
                    </div>
                  </div>
                  
                  <Button
                    variant="ghost"
                    size="sm"
                    iconName="ArrowRight"
                    iconPosition="right"
                    className="text-accent hover:text-accent"
                  >
                    Read More
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Subscription */}
        <div className="bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl p-8 lg:p-12 text-center">
          <div className="max-w-2xl mx-auto">
            <Icon name="Mail" size={48} className="text-accent mx-auto mb-4" />
            <h3 className="text-2xl lg:text-3xl font-bold text-primary mb-4">
              Stay Updated
            </h3>
            <p className="text-muted-foreground mb-8">
              Get the latest insights on web development, emerging technologies, and industry best practices delivered to your inbox.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
              />
              <Button
                variant="default"
                iconName="Send"
                iconPosition="right"
                className="whitespace-nowrap"
              >
                Subscribe
              </Button>
            </div>
            
            <p className="text-xs text-muted-foreground mt-4">
              No spam, unsubscribe at any time. Join 2,500+ developers already subscribed.
            </p>
          </div>
        </div>

        {/* View All Posts CTA */}
        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            iconName="BookOpen"
            iconPosition="left"
          >
            View All Articles
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LatestInsights;