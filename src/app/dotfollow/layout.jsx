import Footer from "../components/footer";

export const metadata = {
    title: "Follow my Mouse",
    description: "A program that follows your mouse with a circle",
  };
  
export default function layout({children}) {
  return (
    <div>
      {children}
      <Footer />
    </div>
  )
}
