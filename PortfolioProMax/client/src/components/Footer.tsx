export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-dark text-white py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p>&copy; {currentYear} Rahul Singh. All rights reserved.</p>
          </div>
          
          <div className="flex space-x-4">
            <a 
              href="https://linkedin.com/in/rahuls01" 
              target="_blank" 
              rel="noreferrer"
              className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-accent transition-colors"
              aria-label="LinkedIn Profile"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a 
              href="mailto:rahulsingh.qadirector@gmail.com" 
              className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-accent transition-colors"
              aria-label="Email"
            >
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
