import Image from "next/image";

export default function Home() {
  return (
       <div className="w-[80%] mx-auto">
            <header>
                <h1 id="logo">facebook</h1>
            </header>
            <main>
                <section id="card">
                    <p>Connect with friends and the world
                    around you on Facebook.</p>
                </section>
                <form className="w-full h-full my-8 mx-auto">
                    <input type="email"
                    placeholder="Email or phone number"
                    required/>
                    <input type="password"
                    placeholder="Password" required/>
                    <section id="submit">
                        <a className="forgot" href="#">
                         Forgot password?</a>
                    
                        <button type="submit"
                        className="login w-[95%]">Login</button>
                    </section>
                    <hr></hr>
                    <section className="create_acc">
                        <a href="#">Create new account</a>
                    </section>
                </form>
            </main>
            <footer>
                <p>Meta © 2024. All rights reserved.</p>
            </footer>
        </div>
  );
}
