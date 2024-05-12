-- CreateEnum
CREATE TYPE "Role" AS ENUM ('Patient', 'PCP', 'Admin');

-- CreateTable
CREATE TABLE "User" (
    "userId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'Patient',
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "patientId" TEXT NOT NULL,
    "physicianId" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("userId")
);

-- CreateTable
CREATE TABLE "Patient" (
    "patientId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "gender" TEXT NOT NULL,
    "contactinfo" TEXT NOT NULL,
    "MedicalHistory" TEXT NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'Patient',

    CONSTRAINT "Patient_pkey" PRIMARY KEY ("patientId")
);

-- CreateTable
CREATE TABLE "Physician" (
    "physicianId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "specialization" TEXT NOT NULL,
    "contactinfo" TEXT NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'PCP',

    CONSTRAINT "Physician_pkey" PRIMARY KEY ("physicianId")
);

-- CreateTable
CREATE TABLE "Appointment" (
    "appointmentId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "patientId" TEXT NOT NULL,
    "physicianId" TEXT NOT NULL,

    CONSTRAINT "Appointment_pkey" PRIMARY KEY ("appointmentId")
);

-- CreateTable
CREATE TABLE "MedicalRecord" (
    "recordId" TEXT NOT NULL,
    "patientId" TEXT NOT NULL,
    "physicianId" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "symptoms" TEXT NOT NULL,
    "allergies" TEXT NOT NULL,
    "currentSmokingStatus" TEXT NOT NULL,
    "alcholIntake" BOOLEAN NOT NULL,
    "diagnosis" TEXT NOT NULL,
    "treatmentPlan" TEXT NOT NULL,

    CONSTRAINT "MedicalRecord_pkey" PRIMARY KEY ("recordId")
);

-- CreateTable
CREATE TABLE "Prescription" (
    "prescriptionId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "physicianId" TEXT NOT NULL,
    "recordId" TEXT NOT NULL,
    "medication" TEXT NOT NULL,
    "dosage" TEXT NOT NULL,
    "frequency" TEXT NOT NULL,

    CONSTRAINT "Prescription_pkey" PRIMARY KEY ("prescriptionId")
);

-- CreateTable
CREATE TABLE "Diagnosis" (
    "diagnosisId" TEXT NOT NULL,
    "recordId" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "severity" TEXT NOT NULL,

    CONSTRAINT "Diagnosis_pkey" PRIMARY KEY ("diagnosisId")
);

-- CreateTable
CREATE TABLE "Test" (
    "testId" TEXT NOT NULL,
    "recordId" TEXT NOT NULL,
    "typeOfTest" TEXT NOT NULL,
    "result" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Test_pkey" PRIMARY KEY ("testId")
);

-- CreateTable
CREATE TABLE "Treatment" (
    "treatmentId" TEXT NOT NULL,
    "recordId" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Treatment_pkey" PRIMARY KEY ("treatmentId")
);

-- CreateTable
CREATE TABLE "Invoice" (
    "invoiceId" TEXT NOT NULL,
    "patientId" TEXT NOT NULL,
    "physicianId" TEXT NOT NULL,
    "invoiceDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "amount" DOUBLE PRECISION NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Invoice_pkey" PRIMARY KEY ("invoiceId")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "Patient"("patientId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_physicianId_fkey" FOREIGN KEY ("physicianId") REFERENCES "Physician"("physicianId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Appointment" ADD CONSTRAINT "Appointment_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "Patient"("patientId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Appointment" ADD CONSTRAINT "Appointment_physicianId_fkey" FOREIGN KEY ("physicianId") REFERENCES "Physician"("physicianId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MedicalRecord" ADD CONSTRAINT "MedicalRecord_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "Patient"("patientId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MedicalRecord" ADD CONSTRAINT "MedicalRecord_physicianId_fkey" FOREIGN KEY ("physicianId") REFERENCES "Physician"("physicianId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Prescription" ADD CONSTRAINT "Prescription_physicianId_fkey" FOREIGN KEY ("physicianId") REFERENCES "Physician"("physicianId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Prescription" ADD CONSTRAINT "Prescription_recordId_fkey" FOREIGN KEY ("recordId") REFERENCES "MedicalRecord"("recordId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Diagnosis" ADD CONSTRAINT "Diagnosis_recordId_fkey" FOREIGN KEY ("recordId") REFERENCES "MedicalRecord"("recordId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Test" ADD CONSTRAINT "Test_recordId_fkey" FOREIGN KEY ("recordId") REFERENCES "MedicalRecord"("recordId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Treatment" ADD CONSTRAINT "Treatment_recordId_fkey" FOREIGN KEY ("recordId") REFERENCES "MedicalRecord"("recordId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Invoice" ADD CONSTRAINT "Invoice_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "Patient"("patientId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Invoice" ADD CONSTRAINT "Invoice_physicianId_fkey" FOREIGN KEY ("physicianId") REFERENCES "Physician"("physicianId") ON DELETE RESTRICT ON UPDATE CASCADE;
