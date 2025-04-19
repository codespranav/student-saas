import { SignIn } from '@clerk/nextjs';

export default function Page() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-100 to-white">
      <SignIn
        appearance={{
          elements: {
            card: "shadow-xl border border-gray-200 rounded-xl",
            headerTitle: "text-3xl text-indigo-700 font-semibold",
            headerSubtitle: "text-gray-500",
            formFieldLabel: "text-sm font-medium text-gray-700",
            socialButtonsBlockButton:
              "bg-indigo-600 hover:bg-indigo-700 text-white font-medium",
            formButtonPrimary:
              "bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-md mt-2",
          },
        }}
        signUpUrl='/sign-up'
      />
    </div>
  );
}
