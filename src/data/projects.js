// Add real URLs below. Empty string = button shows as "not published yet".
export const projects = [
  {
    id: 'events', preview: 'events', featured: true,
    title: 'Event Management and Ticket Booking Platform', date: 'April 2026 – May 2026',
    kind: 'Full-stack web application',
    description: 'A full-stack event management and ticket booking platform with role-based user and admin authentication, event discovery, and ticket reservations.',
    features: ['User and admin authentication', 'Event discovery and filtering', 'Interactive seat selection', 'Dynamic ticket pricing', 'Checkout confirmation with QR tickets', 'Wishlist functionality', 'Responsive dark-themed interface', 'Admin dashboard for creating and managing events', 'Persistent storage for users, events, bookings, and seat availability'],
    tech: ['HTML', 'CSS', 'JavaScript', 'Vite', 'Node.js', 'Express.js', 'MongoDB', 'Mongoose'],
    github: '', demo: '',
    note: 'Built as a learning project. Checkout is a booking confirmation flow, not real payment processing.',
  },
  {
    id: 'cars', preview: 'cars',
    title: 'Used Car Price Predictor', date: 'July 2026 – August 2026',
    kind: 'Academic machine-learning project',
    description: 'A machine-learning application that predicts used-car selling prices from vehicle attributes, built as part of my AI & ML training.',
    features: ['Data cleaning and preprocessing', 'Missing-value and duplicate handling', 'Categorical-label processing', 'Price-outlier handling', 'Model training and comparison', 'Linear Regression and Decision Tree Regressor', 'Evaluation using R², MAE, and RMSE'],
    tech: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Linear Regression', 'Decision Tree Regressor', 'HTML', 'CSS', 'JavaScript', 'JSON'],
    github: '', demo: '',
    note: 'An academic project for learning, not a commercial valuation tool.',
  },
]
