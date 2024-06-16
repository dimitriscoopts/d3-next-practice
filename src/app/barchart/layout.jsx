import Footer from "../components/footer";

export const metadata = {
    title: "Bar Chart",
    description: "A program that loads in soe data using D3 utils and uses React state to keep track of the data",
  };
  
export default function layout({children}) {
  return (
    <div>
      {children}
      <Footer />
    </div>
  )
}
