export const cardIconSx = { width: 60, height: 60 }

export function CardIconWrapper({children}) {
  return <div className="card-icon hidden md:block p-6 shadow-lg border m-3">
    {children}
  </div>
}

export function StandardCardIcon({Icon}) {
  return <CardIconWrapper><Icon sx={cardIconSx} /></CardIconWrapper>
}