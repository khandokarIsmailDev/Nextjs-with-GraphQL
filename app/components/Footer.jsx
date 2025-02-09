import Social from "./Social"

export default function Footer() {
  return (
    <footer className="flex justify-between items-center px-8 py-4 bg-gray-400 text-white">
      <p>@2025 IsBlog</p>
      <div className="flex items-center space-x-4">
        <Social/>
      </div>
    </footer>
  )
}
