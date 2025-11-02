import ConsultationForm from '../components/ConsultationForm'

export default function Consultation() {
  return (
    <div>
      <h1 className="text-2xl font-bold">Corporate Contact Form</h1>
      <p className="text-gray-600 dark:text-gray-300 mt-2">Fill out the form and we'll contact you to arrange a consultation.</p>

      <div className="mt-6">
        <ConsultationForm />
      </div>
    </div>
  )
}
