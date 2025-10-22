import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Textarea } from '@/components/ui/textarea.jsx'
import { Brain, Database, Cpu, Users, GraduationCap, ClipboardCheck, Lightbulb, Mail, Phone, MapPin, Menu, X, Globe } from 'lucide-react'
import quartilleLogo from './assets/quartille_logo.png'
import './App.css'

function App() {
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
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.')
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
              <button onClick={() => scrollToSection('home')} className="hover:text-cyan-400 transition-colors">Início</button>
              <button onClick={() => scrollToSection('services')} className="hover:text-cyan-400 transition-colors">Serviços</button>
              <button onClick={() => scrollToSection('about')} className="hover:text-cyan-400 transition-colors">Sobre</button>
              <button onClick={() => scrollToSection('contact')} className="hover:text-cyan-400 transition-colors">Contato</button>
              <button onClick={() => navigate('/en')} className="flex items-center gap-1 hover:text-cyan-400 transition-colors text-sm">
                <Globe size={16} />
                EN
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
              <button onClick={() => scrollToSection('home')} className="text-left hover:text-cyan-400 transition-colors">Início</button>
              <button onClick={() => scrollToSection('services')} className="text-left hover:text-cyan-400 transition-colors">Serviços</button>
              <button onClick={() => scrollToSection('about')} className="text-left hover:text-cyan-400 transition-colors">Sobre</button>
              <button onClick={() => scrollToSection('contact')} className="text-left hover:text-cyan-400 transition-colors">Contato</button>
              <button onClick={() => navigate('/en')} className="text-left hover:text-cyan-400 transition-colors text-sm">EN - English</button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-fade-in">
              Quartille: Impulsionando a Inovação em IA e Dados
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 animate-fade-in-up">
              Soluções de ponta em cursos profissionais, outsourcing, avaliação de proficiência técnica e consultoria para o futuro da tecnologia.
            </p>
            <div className="flex flex-wrap gap-4 justify-center animate-fade-in-up">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-6 text-lg"
                onClick={() => scrollToSection('contact')}
              >
                Fale Conosco
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 px-8 py-6 text-lg"
                onClick={() => scrollToSection('services')}
              >
                Nossos Serviços
              </Button>
            </div>
          </div>

          {/* Feature Icons */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 max-w-4xl mx-auto">
            <div className="flex flex-col items-center gap-3 p-4 rounded-lg bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 hover:border-cyan-500/50 transition-all">
              <Brain className="w-12 h-12 text-cyan-400" />
              <span className="text-sm font-medium">Inteligência Artificial</span>
            </div>
            <div className="flex flex-col items-center gap-3 p-4 rounded-lg bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 hover:border-blue-500/50 transition-all">
              <Cpu className="w-12 h-12 text-blue-400" />
              <span className="text-sm font-medium">Machine Learning</span>
            </div>
            <div className="flex flex-col items-center gap-3 p-4 rounded-lg bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 hover:border-purple-500/50 transition-all">
              <Database className="w-12 h-12 text-purple-400" />
              <span className="text-sm font-medium">Ciência de Dados</span>
            </div>
            <div className="flex flex-col items-center gap-3 p-4 rounded-lg bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 hover:border-indigo-500/50 transition-all">
              <Database className="w-12 h-12 text-indigo-400" />
              <span className="text-sm font-medium">Engenharia de Dados</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-slate-800/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Soluções Completas para o Seu Desenvolvimento e Negócio
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Oferecemos um portfólio completo de serviços especializados para impulsionar sua jornada em IA e dados.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Cursos Profissionais */}
            <Card className="bg-slate-800/50 border-slate-700/50 hover:border-cyan-500/50 transition-all backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-3 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600">
                    <GraduationCap className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-2xl text-white">Cursos Profissionais</CardTitle>
                </div>
                <CardDescription className="text-slate-300 text-base">
                  Programas de treinamento intensivos e especializados
                </CardDescription>
              </CardHeader>
              <CardContent className="text-slate-300">
                <p className="mb-4">
                  Desenvolvidos por experts para capacitar profissionais e equipes nas mais recentes tecnologias e metodologias em IA, ML, Ciência de Dados e Engenharia de Dados.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-1">•</span>
                    <span>Conteúdo atualizado com as últimas tendências do mercado</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-1">•</span>
                    <span>Metodologia prática com projetos reais</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-1">•</span>
                    <span>Instrutores com experiência acadêmica e de mercado</span>
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
                  <CardTitle className="text-2xl text-white">Outsourcing de Mão de Obra</CardTitle>
                </div>
                <CardDescription className="text-slate-300 text-base">
                  Talentos altamente qualificados para seus projetos
                </CardDescription>
              </CardHeader>
              <CardContent className="text-slate-300">
                <p className="mb-4">
                  Alocação de profissionais especializados em IA, ML, Ciência de Dados e Engenharia de Dados para projetos específicos ou demandas contínuas de sua empresa.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>Flexibilidade na alocação de recursos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>Acesso a expertise de ponta</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>Redução de custos com recrutamento e treinamento</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Avaliação de Proficiência Técnica */}
            <Card className="bg-slate-800/50 border-slate-700/50 hover:border-purple-500/50 transition-all backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-3 rounded-lg bg-gradient-to-br from-purple-500 to-indigo-600">
                    <ClipboardCheck className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-2xl text-white">Avaliação de Proficiência Técnica</CardTitle>
                </div>
                <CardDescription className="text-slate-300 text-base">
                  Avaliações rigorosas e personalizadas
                </CardDescription>
              </CardHeader>
              <CardContent className="text-slate-300">
                <p className="mb-4">
                  Avaliações para aferir o nível de proficiência técnica de candidatos ou equipes em diversas subáreas da IA e Dados.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">•</span>
                    <span>Validação de conhecimento prático e teórico</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">•</span>
                    <span>Testes personalizados para suas necessidades</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">•</span>
                    <span>Garantia de contratação dos melhores talentos</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Consultoria */}
            <Card className="bg-slate-800/50 border-slate-700/50 hover:border-indigo-500/50 transition-all backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-3 rounded-lg bg-gradient-to-br from-indigo-500 to-cyan-600">
                    <Lightbulb className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-2xl text-white">Consultoria Especializada</CardTitle>
                </div>
                <CardDescription className="text-slate-300 text-base">
                  Orientação estratégica e técnica
                </CardDescription>
              </CardHeader>
              <CardContent className="text-slate-300">
                <p className="mb-4">
                  Orientação para empresas que buscam implementar ou otimizar soluções em Inteligência Artificial, Aprendizado de Máquina, Ciência de Dados e Engenharia de Dados.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-400 mt-1">•</span>
                    <span>Desenvolvimento de arquiteturas de dados robustas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-400 mt-1">•</span>
                    <span>Implementação de modelos de ML</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-400 mt-1">•</span>
                    <span>Estratégias de IA e governança de dados</span>
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
              A Força por Trás da Quartille: Inovação e Conhecimento
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-slate-300 text-lg">
              <p>
                A <strong className="text-white">Quartille</strong> é uma empresa dedicada a elevar o nível de conhecimento e aplicação prática nas áreas mais disruptivas da tecnologia. Fundada em <strong className="text-cyan-400">2015</strong> pela <strong className="text-cyan-400">Professora Dra. Emilia Colonese</strong>, uma renomada especialista com PhD em Engenharia de Computação e Professora no Instituto Tecnológico de Aeronáutica (ITA), além de Militar da reserva da Força Aérea FAB, a Quartille nasceu da paixão por transformar dados em inteligência e capacitar profissionais para os desafios do mundo moderno.
              </p>
              <p>
                Nossa missão é fornecer soluções de alta qualidade que impulsionem o crescimento e a inovação de nossos clientes, através de uma abordagem que une rigor acadêmico e aplicabilidade prática.
              </p>
              <p>
                Com a liderança da Dra. Emilia Colonese, combinamos excelência acadêmica com experiência de mercado, oferecendo serviços que verdadeiramente fazem a diferença na transformação digital das organizações.
              </p>
            </div>

            <div className="bg-gradient-to-br from-cyan-500/10 to-blue-600/10 p-8 rounded-2xl border border-cyan-500/30 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-4 text-white">Por Que Escolher a Quartille?</h3>
              <ul className="space-y-4 text-slate-300">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-cyan-400 mt-2"></div>
                  <span><strong className="text-white">Excelência Acadêmica:</strong> Fundada por uma PhD do ITA com vasta experiência em ensino e pesquisa</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-400 mt-2"></div>
                  <span><strong className="text-white">Experiência Prática:</strong> Soluções testadas e validadas em ambientes reais de negócios</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-purple-400 mt-2"></div>
                  <span><strong className="text-white">Abordagem Personalizada:</strong> Cada cliente recebe soluções customizadas para suas necessidades específicas</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-indigo-400 mt-2"></div>
                  <span><strong className="text-white">Tecnologias de Ponta:</strong> Sempre atualizados com as últimas inovações em IA e dados</span>
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
              Fale Conosco
            </h2>
            <p className="text-xl text-slate-300">
              Entre em contato para saber como a Quartille pode impulsionar o seu futuro e o da sua empresa.
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
                  <h3 className="font-semibold text-white mb-1">Telefone</h3>
                  <p className="text-slate-300">+55 (12) 98830-2002</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 rounded-lg bg-slate-800/50 border border-slate-700/50">
                <MapPin className="w-6 h-6 text-purple-400 mt-1" />
                <div>
                  <h3 className="font-semibold text-white mb-1">Localização</h3>
                  <p className="text-slate-300">São José dos Campos, SP - Brasil</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  type="text"
                  name="name"
                  placeholder="Seu Nome"
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
                  placeholder="Seu Email"
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
                  placeholder="Assunto"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="bg-slate-800/50 border-slate-700 text-white placeholder:text-slate-400"
                />
              </div>
              <div>
                <Textarea
                  name="message"
                  placeholder="Sua Mensagem"
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
                Enviar Mensagem
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
          <p>© 2025 Quartille. Todos os direitos reservados.</p>
          <p className="mt-2 text-sm">Excelência em Inteligência Artificial, Machine Learning, Ciência de Dados e Engenharia de Dados</p>
        </div>
      </footer>
    </div>
  )
}

export default App

