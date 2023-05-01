import Image from "next/image"

const FormSubmit = () => {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-2/4 -translate-y-1/2">
      <Image
        src="/images/verification.jpg"
        alt="verification-mail"
        width={400}
        height={250}
      />
      <h2 className="text-center font-bold text-2xl mb-2">
        Verify your email address
      </h2>
      <p className="text-center">
        A verification link has been sent. You can find it in your mail inbox.
      </p>
    </div>
  );
}

export default FormSubmit;