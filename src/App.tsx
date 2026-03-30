import { useTranslation } from 'react-i18next'
import './index.css'

function App() {
  const { t } = useTranslation()

  return (
    <main>
      <h1 className="text-3xl font-bold text-yellow-500">
        {t('hero.title')}
      </h1>
    </main>
  )
}

export default App