import { useEffect, useState } from "react"
import { createPortal } from "react-dom"

export const PortalContainer= ({ children, wrapperId }) => {
   const [mounted, setMounted] = useState(false)

   useEffect(() => {
      setMounted(true)
      if (!document.getElementById(wrapperId)) {
        const bodies = document.getElementsByTagName('body');
        const parent = document.createElement('div');
        parent.id = wrapperId;
        bodies[0].appendChild(parent);
      }
        

      return () => setMounted(false);

   }, [])

   return mounted
      ? createPortal(
          children, 
          document.getElementById(wrapperId)
        )
      : null
}