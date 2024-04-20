module.exports = (sequelize, DataTypes) => {
    const VerifyLoans = sequelize.define("tb_verifyLoan", {
        uuids: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true,
        },
        sourceAccount: {
            type: DataTypes.STRING,
        },
        loanType: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        customerNumber: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        branchCode: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        loanAmount: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        tenor: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        interest : {
            type: DataTypes.STRING,
        },
        processfee : {
            type: DataTypes.STRING,
        },
        insurance : {
            type: DataTypes.STRING,
        },
        paymentPlan: {
            type: DataTypes.STRING,
        },
        schedule: {
            type: DataTypes.STRING,
        },
        effectiveDate: {
            type: DataTypes.STRING,
        },
        lastRepayDate: {
            type: DataTypes.STRING,
        },
        loanBalance: {
            type: DataTypes.STRING,
        },
        interestAmt: {
            type: DataTypes.STRING,
        },
        principalAmt: {
            type: DataTypes.STRING,
        },
        totalInterest: {
            type: DataTypes.STRING,
        },
        totalPrincipal: {
            type: DataTypes.STRING,
        },
        interestType: {
            type: DataTypes.STRING,
        },
        sector: {
            type: DataTypes.STRING,
        },
        loanPurpose: {
            type: DataTypes.STRING,
        },
        staffLoan: {
            type: DataTypes.STRING,
        },
        appStatus: {
            type: DataTypes.STRING,
        },
        approvePerson: {
            type: DataTypes.STRING,
        },
        postedPerson: {
            type: DataTypes.STRING,
        },
        postedDate: {
            type: DataTypes.DATE,
        },
        securityType: {
            type: DataTypes.STRING,
        },
        securityValue: {
            type: DataTypes.STRING,
        },
        guarantor: {
            type: DataTypes.STRING,
        },
        guarantorPhone: {
            type: DataTypes.STRING,
        },
        guarantorId: {
            type: DataTypes.STRING,
        },
        guarantor2: {
            type: DataTypes.STRING,
        },
        guarantorPhone2: {
            type: DataTypes.STRING,
        },
        guarantorId2: {
            type: DataTypes.STRING,
        },
        nationalIdFront: {
            type: DataTypes.STRING,
        },
        nationalIdBack: {
            type: DataTypes.STRING,
        },
        otherFiles: {
            type: DataTypes.STRING,
        },
        rejectReason: {
            type: DataTypes.STRING,
        },
        referredTo: {
            type: DataTypes.STRING,
        },
        referredBy: {
            type: DataTypes.STRING,
        },
        verifiedBy: {
            type: DataTypes.STRING,
        },
    });
    return VerifyLoans; 
}