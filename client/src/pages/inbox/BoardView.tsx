import React from 'react'

const BoardView = () => {
  return (
    <div className="overflow-y-auto min-h-0 flex flex-col gap-2 w-full">
      {Array.from({length: 30}).map((_, i) => (
        <div key={i} className="w-full h-20 bg-surface shrink-0 border border-surface-border"></div>
      ))}
    </div>
  )
}

export default BoardView