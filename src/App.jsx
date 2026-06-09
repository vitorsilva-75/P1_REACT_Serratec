import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import styles from './styles.module.css'

function App() {
  const [senha, setSenha] = useState('');
  const [email, setEmail] = useState('');

  const [Login, setLogin] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLogin(true);
  };

  useEffect(() => {
    if(Login) {
        console.log('Email digitado: ',email);
        console.log('Senha digitada: ',senha);
    }

        setLogin(false);
    
}, [Login,email,senha]);

return (
    <>
    <div className={styles["imagem-fundo"]}>
        <img className={styles["background"]} src="https://cdn.pixabay.com/photo/2020/10/11/09/04/peak-5645235_1280.jpg" alt="imagem de fundo"/>
        
        <section className={styles["caixa-login"]}>
            <div className={styles["bem-vindo"]}>
                <div className={styles["img-logo"]}>
                    <img className={styles["logo"]} src="https://cdn.worldvectorlogo.com/logos/arc-teryx.svg" alt="Logo"/>
                </div>
                <h3>Welcome</h3>

                <p>Sign in to manage email preferences, track orders and returns, and checkout faster.</p>
            </div>
            
            <form action="/login" onSubmit={handleSubmit}>
                <div className={styles["input-login"]}>
                    <label htmlFor="email">Email address*</label>
                    <input type="email"
                            id="email"
                            name="email"
                            placeholder="seu@email.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                    />
                </div>

                <div className={styles["input-login"]}>
                    <label htmlFor="password">Password*</label>
                    <input type="password"
                            id="password"
                            name="password"
                            placeholder="Digite sua senha"
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                            required
                    />
                </div>

                <div className={styles["redefinicao"]}>
                    <a href="#">Forgot password?</a>
                </div>

                <button className={styles["Continue"]} type="submit">Continue</button>

                <div className={styles["rodape"]}>
                    <h3>Don't have an account?</h3>
                    <a href="#">Sign up</a>
                </div>
            </form>
        </section>
    </div>
    </>
)
}

export default App
