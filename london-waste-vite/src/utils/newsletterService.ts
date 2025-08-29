interface NewsletterSubscription {
  email: string;
  timestamp: string;
  status: 'active' | 'unsubscribed';
}

class NewsletterService {
  private subscribers: NewsletterSubscription[] = [];
  private readonly storageKey = 'london_waste_newsletter_subscribers';

  constructor() {
    this.loadSubscribers();
  }

  private loadSubscribers(): void {
    try {
      const stored = localStorage.getItem(this.storageKey);
      if (stored) {
        this.subscribers = JSON.parse(stored);
      }
    } catch (error) {
      console.error('Failed to load newsletter subscribers:', error);
      this.subscribers = [];
    }
  }

  private saveSubscribers(): void {
    try {
      localStorage.setItem(this.storageKey, JSON.stringify(this.subscribers));
    } catch (error) {
      console.error('Failed to save newsletter subscribers:', error);
    }
  }

  private validateEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  async subscribe(email: string): Promise<{ success: boolean; message: string }> {
    return new Promise((resolve) => {
      // Simulate API delay
      setTimeout(() => {
        if (!email || !email.trim()) {
          resolve({ success: false, message: 'Email address is required' });
          return;
        }

        if (!this.validateEmail(email.trim())) {
          resolve({ success: false, message: 'Please enter a valid email address' });
          return;
        }

        const normalizedEmail = email.trim().toLowerCase();
        
        // Check if already subscribed
        const existingSubscriber = this.subscribers.find(
          sub => sub.email === normalizedEmail && sub.status === 'active'
        );

        if (existingSubscriber) {
          resolve({ success: false, message: 'This email is already subscribed to our newsletter' });
          return;
        }

        // Add or reactivate subscription
        const existingIndex = this.subscribers.findIndex(sub => sub.email === normalizedEmail);
        if (existingIndex >= 0) {
          this.subscribers[existingIndex] = {
            email: normalizedEmail,
            timestamp: new Date().toISOString(),
            status: 'active'
          };
        } else {
          this.subscribers.push({
            email: normalizedEmail,
            timestamp: new Date().toISOString(),
            status: 'active'
          });
        }

        this.saveSubscribers();
        resolve({ 
          success: true, 
          message: 'Successfully subscribed! You\'ll receive our weekly newsletter with waste management tips and special offers.' 
        });
      }, 800);
    });
  }

  async unsubscribe(email: string): Promise<{ success: boolean; message: string }> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const normalizedEmail = email.trim().toLowerCase();
        const subscriberIndex = this.subscribers.findIndex(
          sub => sub.email === normalizedEmail && sub.status === 'active'
        );

        if (subscriberIndex === -1) {
          resolve({ success: false, message: 'Email not found in our newsletter list' });
          return;
        }

        this.subscribers[subscriberIndex].status = 'unsubscribed';
        this.saveSubscribers();
        
        resolve({ 
          success: true, 
          message: 'Successfully unsubscribed from our newsletter' 
        });
      }, 500);
    });
  }

  getSubscriberCount(): number {
    return this.subscribers.filter(sub => sub.status === 'active').length;
  }

  getSubscribers(): NewsletterSubscription[] {
    return this.subscribers.filter(sub => sub.status === 'active');
  }

  isSubscribed(email: string): boolean {
    const normalizedEmail = email.trim().toLowerCase();
    return this.subscribers.some(
      sub => sub.email === normalizedEmail && sub.status === 'active'
    );
  }
}

// Export singleton instance
export const newsletterService = new NewsletterService();
export type { NewsletterSubscription };