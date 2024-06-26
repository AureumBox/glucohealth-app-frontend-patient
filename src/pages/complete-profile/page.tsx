import { IonPage, IonContent, IonText } from '@ionic/react'

import { Form } from './components/form'

export function CompleteProfilePage() {
  return (
    <IonPage>
      <IonContent fullscreen>
        <main className="w-full h-full flex justify-center items-center flex-col gap-5 px-5">
          <IonText className="text-center">
            <h1 className="text-4xl">Registro</h1>
            <h2>Ingrese sus datos para completar su perfil</h2>
          </IonText>
          <Form />
        </main>
      </IonContent>
    </IonPage>
  )
}
