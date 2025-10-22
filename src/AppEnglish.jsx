import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Textarea } from '@/components/ui/textarea.jsx'
import { Brain, Database, Cpu, Users, GraduationCap, ClipboardCheck, Lightbulb, Mail, Phone, MapPin, Menu, X, Globe } from 'lucide-react'
import quartilleLogo from './assets/quartille_logo.png'
import './App.css'

function AppEnglish() {
  const navigate = useNavigate()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Message sent successfully! We will contact you soon.')
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-700/50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img src={quartilleLogo} alt="Quartille Logo" className="h-12 w-12" />
              <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Quartille
              </span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-6">
              <button onClick={() => scrollToSection('home')} className="hover:text-cyan-400 transition-colors">Home</button>
              <button onClick={() => scrollToSection('services')} className="hover:text-cyan-400 transition-colors">Services</button>
              <button onClick={() => scrollToSection('about')} className="hover:text-cyan-400 transition-colors">About</button>
              <button onClick={() => scrollToSection('contact')} className="hover:text-cyan-400 transition-colors">Contact</button>
              <button onClick={() => navigate('/')} className="flex items-center gap-1 hover:text-cyan-400 transition-colors text-sm">
                <Globe size={16} />
                PT
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 flex flex-col gap-3">
              <button onClick={() => scrollToSection('home')} className="text-left hover:text-cyan-400 transition-colors">Home</button>
              <button onClick={() => scrollToSection('services')} className="text-left hover:text-cyan-400 transition-colors">Services</button>
              <button onClick={() => scrollToSection('about')} className="text-left hover:text-cyan-400 transition-colors">About</button>
              <button onClick={() => scrollToSection('contact')} className="text-left hover:text-cyan-400 transition-colors">Contact</button>
              <button onClick={() => navigate('/')} className="text-left hover:text-cyan-400 transition-colors text-sm">PT - Portugués</button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-fade-in">
              Quartille: Driving Innovation in AI and Data
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 animate-fade-in-up">
              Cutting-edge solutions in professional courses, outsourcing, technical proficiency assessment and consulting for the future of technology.
            </p>
            <div className="flex flex-wrap gap-4 justify-center animate-fade-in-up">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-6 text-lg"
                onClick={() => scrollToSection('contact')}
              >
                Contact Us
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 px-8 py-6 text-lg"
                onClick={() => scrollToSection('services')}
              >
                Our Services
              </Button>
            </div>
          </div>

          {/* Feature Icons */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 max-w-4xl mx-auto">
            <div className="flex flex-col items-center gap-3 p-4 rounded-lg bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 hover:border-cyan-500/50 transition-all">
              <Brain className="w-12 h-12 text-cyan-400" />
              <span className="text-sm font-medium">Artificial Intelligence</span>
            </div>
            <div className="flex flex-col items-center gap-3 p-4 rounded-lg bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 hover:border-blue-500/50 transition-all">
              <Cpu className="w-12 h-12 text-blue-400" />
              <span className="text-sm font-medium">Machine Learning</span>
            </div>
            <div className="flex flex-col items-center gap-3 p-4 rounded-lg bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 hover:border-purple-500/50 transition-all">
              <Database className="w-12 h-12 text-purple-400" />
              <span className="text-sm font-medium">Data Science</span>
            </div>
            <div className="flex flex-col items-center gap-3 p-4 rounded-lg bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 hover:border-indigo-500/50 transition-all">
              <Database className="w-12 h-12 text-indigo-400" />
              <span className="text-sm font-medium">Data Engineering</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-slate-800/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Complete Solutions for Your Development and Business
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              We offer a complete portfolio of specialized services to boost your journey in AI and data.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Professional Courses */}
            <Card className="bg-slate-800/50 border-slate-700/50 hover:border-cyan-500/50 transition-all backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-3 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600">
                    <GraduationCap className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-2xl text-white">Professional Courses</CardTitle>
                </div>
                <CardDescription className="text-slate-300 text-base">
                  Intensive and specialized training programs
                </CardDescription>
              </CardHeader>
              <CardContent className="text-slate-300">
                <p className="mb-4">
                  Developed by experts to train professionals and teams in the latest technologies and methodologies in AI, ML, Data Science and Data Engineering.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-1">•</span>
                    <span>Updated content with the latest market trends</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-1">•</span>
                    <span>Practical methodology with real-world projects</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-1">•</span>
                    <span>Instructors with academic and market experience</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Outsourcing */}
            <Card className="bg-slate-800/50 border-slate-700/50 hover:border-blue-500/50 transition-all backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-3 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-2xl text-white">Labor Outsourcing</CardTitle>
                </div>
                <CardDescription className="text-slate-300 text-base">
                  Highly qualified talent for your projects
                </CardDescription>
              </CardHeader>
              <CardContent className="text-slate-300">
                <p className="mb-4">
                  Allocation of professionals specialized in AI, ML, Data Science and Data Engineering for specific projects or continuous demands of your company.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>Flexibility in resource allocation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>Access to cutting-edge expertise</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>Cost reduction in recruitment and training</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Technical Proficiency Assessment */}
            <Card className="bg-slate-800/50 border-slate-700/50 hover:border-purple-500/50 transition-all backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-3 rounded-lg bg-gradient-to-br from-purple-500 to-indigo-600">
                    <ClipboardCheck className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-2xl text-white">Technical Proficiency Assessment</CardTitle>
                </div>
                <CardDescription className="text-slate-300 text-base">
                  Rigorous and personalized evaluations
                </CardDescription>
              </CardHeader>
              <CardContent className="text-slate-300">
                <p className="mb-4">
                  Assessments to measure the technical proficiency level of candidates or teams in various AI and Data subareas.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">•</span>
                    <span>Validation of practical and theoretical knowledge</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">•</span>
                    <span>Customized tests for your needs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">•</span>
                    <span>Guarantee of hiring the best talents</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Specialized Consulting */}
            <Card className="bg-slate-800/50 border-slate-700/50 hover:border-indigo-500/50 transition-all backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-3 rounded-lg bg-gradient-to-br from-indigo-500 to-cyan-600">
                    <Lightbulb className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-2xl text-white">Specialized Consulting</CardTitle>
                </div>
                <CardDescription className="text-slate-300 text-base">
                  Strategic and technical guidance
                </CardDescription>
              </CardHeader>
              <CardContent className="text-slate-300">
                <p className="mb-4">
                  Guidance for companies seeking to implement or optimize solutions in Artificial Intelligence, Machine Learning, Data Science and Data Engineering.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-400 mt-1">•</span>
                    <span>Development of robust data architectures</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-400 mt-1">•</span>
                    <span>Implementation of ML models</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-400 mt-1">•</span>
                    <span>AI strategies and data governance</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              The Force Behind Quartille: Innovation and Knowledge
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-slate-300 text-lg">
              <p>
                <strong className="text-white">Quartille</strong> is a company dedicated to raising the level of knowledge and practical application in the most disruptive areas of technology. Founded in <strong className="text-cyan-400">2015</strong> by <strong className="text-cyan-400">Professor Dr. Emilia Colonese</strong>, a renowned expert with a PhD in Computer Engineering and Professor at the Instituto Tecnológico de Aeronáutica (ITA), as well as a Reserve Officer of the Brazilian Air Force (FAB), Quartille was born from the passion to transform data into intelligence and empower professionals for the challenges of the modern world.
              </p>
              <p>
                Our mission is to provide high-quality solutions that drive growth and innovation for our clients, through an approach that combines academic rigor and practical applicability.
              </p>
              <p>
                With the leadership of Dr. Emilia Colonese, we combine academic excellence with market experience, offering services that truly make a difference in the digital transformation of organizations.
              </p>
            </div>

            <div className="bg-gradient-to-br from-cyan-500/10 to-blue-600/10 p-8 rounded-2xl border border-cyan-500/30 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-4 text-white">Why Choose Quartille?</h3>
              <ul className="space-y-4 text-slate-300">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-cyan-400 mt-2"></div>
                  <span><strong className="text-white">Academic Excellence:</strong> Founded by a PhD from ITA with extensive experience in teaching and research</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-400 mt-2"></div>
                  <span><strong className="text-white">Practical Experience:</strong> Solutions tested and validated in real business environments</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-purple-400 mt-2"></div>
                  <span><strong className="text-white">Personalized Approach:</strong> Each client receives customized solutions for their specific needs</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-indigo-400 mt-2"></div>
                  <span><strong className="text-white">Cutting-edge Technologies:</strong> Always updated with the latest innovations in AI and data</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-slate-800/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Contact Us
            </h2>
            <p className="text-xl text-slate-300">
              Get in touch to learn how Quartille can drive your future and your company's future.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="flex items-start gap-4 p-4 rounded-lg bg-slate-800/50 border border-slate-700/50">
                <Mail className="w-6 h-6 text-cyan-400 mt-1" />
                <div>
                  <h3 className="font-semibold text-white mb-1">Email</h3>
                  <p className="text-slate-300">contato@quartille.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 rounded-lg bg-slate-800/50 border border-slate-700/50">
                <Phone className="w-6 h-6 text-blue-400 mt-1" />
                <div>
                  <h3 className="font-semibold text-white mb-1">Phone</h3>
                  <p className="text-slate-300">+55 (12) 98830-2002</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 rounded-lg bg-slate-800/50 border border-slate-700/50">
                <MapPin className="w-6 h-6 text-purple-400 mt-1" />
                <div>
                  <h3 className="font-semibold text-white mb-1">Location</h3>
                  <p className="text-slate-300">São José dos Campos, SP - Brazil</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="bg-slate-800/50 border-slate-700 text-white placeholder:text-slate-400"
                />
              </div>
              <div>
                <Input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="bg-slate-800/50 border-slate-700 text-white placeholder:text-slate-400"
                />
              </div>
              <div>
                <Input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="bg-slate-800/50 border-slate-700 text-white placeholder:text-slate-400"
                />
              </div>
              <div>
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="bg-slate-800/50 border-slate-700 text-white placeholder:text-slate-400"
                />
              </div>
              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white py-6 text-lg"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-slate-700/50">
        <div className="container mx-auto text-center text-slate-400">
          <div className="flex items-center justify-center gap-3 mb-4">
            <img src={quartilleLogo} alt="Quartille Logo" className="h-8 w-8" />
            <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Quartille
            </span>
          </div>
          <p>© 2025 Quartille. All rights reserved.</p>
          <p className="mt-2 text-sm">Excellence in Artificial Intelligence, Machine Learning, Data Science and Data Engineering</p>
        </div>
      </footer>
    </div>
  )
}

export default AppEnglish

