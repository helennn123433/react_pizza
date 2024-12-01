import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = () => (
    <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={500}
    viewBox="0 0 280 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb">
    <circle cx="136" cy="136" r="136" /> 
    <rect x="0" y="286" rx="15" ry="15" width="280" height="32" /> 
    <rect x="0" y="339" rx="15" ry="15" width="280" height="88" /> 
    <rect x="0" y="455" rx="10" ry="10" width="95" height="30" /> 
    <rect x="125" y="447" rx="20" ry="20" width="152" height="45" />
  </ContentLoader>
)

export default Skeleton;