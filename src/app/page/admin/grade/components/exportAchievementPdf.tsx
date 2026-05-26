import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import { Achievement } from "@/app/service/guruAchievementsAPI";

const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontFamily: 'Helvetica',
    fontSize: 10,
  },
  header: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  table: {
    display: 'flex',
    width: 'auto',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRightWidth: 0,
    borderBottomWidth: 0,
  },
  tableRow: {
    margin: 'auto',
    flexDirection: 'row',
  },
  tableColHeader: {
    width: '16.66%',
    borderStyle: 'solid',
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    backgroundColor: '#f3f4f6',
    padding: 5,
  },
  tableCol: {
    width: '16.66%',
    borderStyle: 'solid',
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    padding: 5,
  },
  tableCellHeader: {
    margin: 'auto',
    fontWeight: 'bold',
    fontSize: 10,
  },
  tableCell: {
    margin: 'auto',
    fontSize: 9,
    textAlign: 'center',
  },
});

interface ExportAchievementPdfProps {
  achievements: Achievement[];
}

export const ExportAchievementPdf = ({ achievements }: ExportAchievementPdfProps) => (
  <Document title="Data Prestasi">
    <Page size="A4" style={styles.page} orientation="landscape">
      <Text style={styles.header}>Data Prestasi Siswa</Text>
      <View style={styles.table}>
        <View style={styles.tableRow}>
          <View style={styles.tableColHeader}><Text style={styles.tableCellHeader}>Nama Siswa</Text></View>
          <View style={styles.tableColHeader}><Text style={styles.tableCellHeader}>NISN</Text></View>
          <View style={styles.tableColHeader}><Text style={styles.tableCellHeader}>Kompetisi</Text></View>
          <View style={styles.tableColHeader}><Text style={styles.tableCellHeader}>Hasil</Text></View>
          <View style={styles.tableColHeader}><Text style={styles.tableCellHeader}>Grade Kompetisi</Text></View>
          <View style={styles.tableColHeader}><Text style={styles.tableCellHeader}>Grade</Text></View>
        </View>
        {achievements.map((a, i) => (
          <View style={styles.tableRow} key={i}>
            <View style={styles.tableCol}><Text style={styles.tableCell}>{a.student?.name || "-"}</Text></View>
            <View style={styles.tableCol}><Text style={styles.tableCell}>{a.student?.nisn || "-"}</Text></View>
            <View style={styles.tableCol}><Text style={styles.tableCell}>{a.competitionName || "-"}</Text></View>
            <View style={styles.tableCol}><Text style={styles.tableCell}>{a.result || "-"}</Text></View>
            <View style={styles.tableCol}><Text style={styles.tableCell}>{a.gradeCompetition?.gradeCompetitionName || "-"}</Text></View>
            <View style={styles.tableCol}>
                <Text style={styles.tableCell}>
                    {a.grade ? `${a.grade.gradeName}` : "-"}
                </Text>
            </View>
          </View>
        ))}
      </View>
    </Page>
  </Document>
);

export default ExportAchievementPdf;
