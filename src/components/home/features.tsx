import { Coins, FileText, Users, Shield } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

const Features = () => {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      <Card className="text-center">
        <CardHeader>
          <Coins className="mx-auto mb-4 h-12 w-12 text-blue-600" />

          <CardTitle>Encrypted Payroll</CardTitle>
        </CardHeader>

        <CardContent>
          <CardDescription>
            Secure ERC20 token payments with end-to-end encryption and
            blockchain verification.
          </CardDescription>
        </CardContent>
      </Card>

      <Card className="text-center">
        <CardHeader>
          <FileText className="mx-auto mb-4 h-12 w-12 text-green-600" />

          <CardTitle>NFT Payslips</CardTitle>
        </CardHeader>

        <CardContent>
          <CardDescription>
            Immutable payslip records as NFTs, providing permanent proof of
            employment and payments.
          </CardDescription>
        </CardContent>
      </Card>

      <Card className="text-center">
        <CardHeader>
          <Users className="mx-auto mb-4 h-12 w-12 text-purple-600" />

          <CardTitle>Job Marketplace</CardTitle>
        </CardHeader>

        <CardContent>
          <CardDescription>
            Trustworthy hiring platform with verified credentials and
            transparent reputation systems.
          </CardDescription>
        </CardContent>
      </Card>

      <Card className="text-center">
        <CardHeader>
          <Shield className="mx-auto mb-4 h-12 w-12 text-red-600" />

          <CardTitle>Privacy First</CardTitle>
        </CardHeader>

        <CardContent>
          <CardDescription>
            Zero-knowledge proofs and encrypted data ensure your sensitive
            information stays private.
          </CardDescription>
        </CardContent>
      </Card>
    </div>
  );
};

export default Features;
