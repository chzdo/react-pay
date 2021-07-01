

import React, { useEffect, useState } from 'react'


export default function useLoadScript(url:string) : Array<boolean> {
  
  let cached: string[] = []

  interface ScriptState{
    loaded: boolean,
    error : boolean
}


  const [state, setState] = useState<ScriptState>({
    loaded: false,
    error:false
 })


  useEffect(() => {
    
    if (cached.includes(url)) {
      setState(e => ({ ...e, loaded: true, error: false }))

      console.log('alredy loaded')
    } else {
      cached.push(url);

      const script = document.createElement('script');
      script.src = url;
      script.async = true;

      const onScriptLoad = (): void => {
        console.log(' loaded')
        setState(e => ({ ...e, loaded: true, error: false }))
      };

      const onScriptError = (): void => {
        console.log('error')
        const index = cached.indexOf(url);
        if (index >= 0) cached.splice(index, 1);
        script.remove();
        setState(e => ({ ...e, loaded: true, error: true }));
      };

      script.addEventListener('load', onScriptLoad);
      script.addEventListener('complete', onScriptLoad);
      script.addEventListener('error', onScriptError);

      document.body.appendChild(script);
    

      return (): any => {
        script.removeEventListener('load', onScriptLoad);
        script.removeEventListener('error', onScriptError);
      }
    }

  }, [url])

  return [state.loaded,state.error]

}