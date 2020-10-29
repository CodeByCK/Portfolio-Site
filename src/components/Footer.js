import React from "react"

function Footer() {
  return (
    <div className="row mt-5">
      <div className="col-12">
        <p className="text-center">
          Copyright © {new Date().getFullYear()} CodeByCK
        </p>
      </div>
    </div>
  )
}

export default Footer
