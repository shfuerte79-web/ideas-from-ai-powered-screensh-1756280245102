export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-center font-mono text-sm">
        <h1 className="text-4xl font-bold text-center mb-8">
          Ideas from: AI-Powered Screenshot to Text
        </h1>
        <p className="text-xl text-center text-gray-600 mb-8">
          ```json
[
  {
    \"title\": \"مساعد كتابة المحتوى الذكي\",
    \"description\": \"أداة تستخدم تقنية OCR لتحويل لقطات الشاشة إلى نصوص قابلة للتحرير، مما يساعد الكتاب والمحررين على تسريع عملية الكتابة.\",
    \"mvp_plan\": \"إنشاء واجهة بسيطة لتحميل لقطات الشاشة، واستخدام مكتبة OCR لتحويل الصورة إلى نص، ثم تمكين المستخدمين من تعديل النصوص وحفظها.\"
  },
  {
    \"title\": \"محلل البيانات المرئية\",
    \"description\": \"أداة لتحليل لقطات الشاشة من تقارير البيانات وتحويلها إلى نصوص تحليلية، مما يساعد الشركات على استخلاص رؤى سريعة.\",
    \"mvp_plan\": \"تطوير واجهة لتحميل لقطات الشاشة من تقارير البيانات، واستخدام تقنية OCR لتحويلها إلى نص، ثم تطبيق خوارزميات بسيطة لتحليل النصوص وتقديم رؤى.\"
  },
  {
    \"title\": \"أداة التعلم الذاتي\",
    \"description\": \"منصة تعليمية تستخدم OCR لتحويل لقطات الشاشة من المحاضرات أو الدروس إلى نصوص، مما يسهل على الطلاب مراجعة المحتوى.\",
    \"mvp_plan\": \"إنشاء واجهة لتحميل لقطات الشاشة من المحاضرات، واستخدام OCR لتحويلها إلى نصوص، ثم تنظيم المحتوى في فئات تعليمية وتوفير خيارات بحث.\"
  }
]
```
        </p>
        <div className="flex justify-center space-x-4">
          <a 
            href="/auth" 
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Get Started
          </a>
          <a 
            href="/dashboard" 
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
          >
            Dashboard
          </a>
        </div>
      </div>
    </main>
  )
}