// import Link from "next/link";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export const metadata = {
    title: "My Dashboard",
    description: "Aid your memory",
  };
  
export default function layout({children}) {
  return (
    <div>
      {children}
      <Footer />
    </div>
  )
}
