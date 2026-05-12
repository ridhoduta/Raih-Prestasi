import { Document, Page, Text, View, StyleSheet, Image } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontFamily: 'Helvetica',
    fontSize: 11,
    lineHeight: 1.5,
    color: '#000',
  },
  header: {
    marginBottom: 20,
    borderBottomWidth: 2,
    borderBottomColor: '#000',
    paddingBottom: 10,
    textAlign: 'center',
  },
  kopTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    marginBottom: 2,
  },
  kopSubtitle: {
    fontSize: 10,
    fontStyle: 'italic',
  },
  titleContainer: {
    marginTop: 15,
    marginBottom: 20,
    textAlign: 'center',
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    textDecoration: 'underline',
    textTransform: 'uppercase',
  },
  nomorSurat: {
    fontSize: 11,
    marginTop: 2,
  },
  content: {
    marginTop: 10,
  },
  paragraph: {
    marginBottom: 12,
    textAlign: 'justify',
  },
  listContainer: {
    marginLeft: 20,
    marginBottom: 15,
  },
  listItem: {
    flexDirection: 'row',
    marginBottom: 4,
  },
  label: {
    width: 120,
  },
  separator: {
    width: 15,
  },
  value: {
    flex: 1,
    fontWeight: 'bold',
  },
  footer: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  signatureBlock: {
    width: 200,
    textAlign: 'center',
  },
  signatureSpace: {
    height: 50,
  },
  signerName: {
    fontWeight: 'bold',
    textDecoration: 'underline',
  },
  signerDetail: {
    fontSize: 11,
    marginTop: 2,
  },
  signatureImage: {
    width: 100,
    height: 60,
    marginVertical: 5,
    alignSelf: 'center',
  },
  table: {
    display: 'flex',
    width: 'auto',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#000',
    borderRightWidth: 0,
    borderBottomWidth: 0,
    marginVertical: 10,
  },
  tableRow: {
    margin: 'auto',
    flexDirection: 'row',
  },
  tableColHeader: {
    width: '33.33%',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#000',
    borderLeftWidth: 0,
    borderTopWidth: 0,
    backgroundColor: '#f0f0f0',
    padding: 5,
  },
  tableCol: {
    width: '33.33%',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#000',
    borderLeftWidth: 0,
    borderTopWidth: 0,
    padding: 5,
  },
  tableCellHeader: {
    margin: 'auto',
    fontSize: 10,
    fontWeight: 'bold',
  },
  tableCell: {
    margin: 'auto',
    fontSize: 10,
  },
});

export interface RekomData {
  nomorSurat: string;
  namaSiswa: string;
  nisn: string;
  kelas: string;
  kegiatan: string;
  penyelenggara: string;
  waktuKegiatan: string;
  tempatKegiatan: string;
  tanggalSurat: string;
  namaPenandatangan: string;
  jabatanPenandatangan: string;
  nipPenandatangan?: string;
  tandaTangan?: string;
}

export interface DispenData {
  nomorSurat: string;
  students: {
    namaSiswa: string;
    nisn: string;
    kelas: string;
  }[];
  kegiatan: string;
  penyelenggara: string;
  tanggalMulai: string;
  tanggalSelesai: string;
  tempatKegiatan: string;
  tanggalSurat: string;
  namaPenandatangan: string;
  jabatanPenandatangan: string;
  nipPenandatangan?: string;
  tandaTangan?: string;
}

export const RekomPDF = ({ data }: { data: RekomData }) => (
  <Document title={`Surat Rekomendasi - ${data.namaSiswa}`}>
    <Page size="A4" style={styles.page}>
      <View style={styles.header}>
        <Text style={styles.kopTitle}>PEMERINTAH KABUPATEN TULUNGAGUNG</Text>
        <Text style={styles.kopTitle}>DINAS PENDIDIKAN DAN KEBUDAYAAN KABUPATEN TULUNGAGUNG</Text>
        <Text style={styles.kopTitle}>SMKN 1 BOYOLANGU</Text>
        <Text style={styles.kopSubtitle}>Jl. Ki Mangun Sarkoro No.VI/3, Dusun Talun, Beji, Kec. Boyolangu, Kabupaten Tulungagung, Jawa Timur 66233</Text>
        <Text style={styles.kopSubtitle}>Telepon: (021) 1234567, Website: smkn1boyolangu.sch.id</Text>
      </View>

      <View style={styles.titleContainer}>
        <Text style={styles.title}>SURAT REKOMENDASI</Text>
        <Text style={styles.nomorSurat}>Nomor: {data.nomorSurat}</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.paragraph}>
          Yang bertanda tangan di bawah ini, {data.jabatanPenandatangan} SMKN 1 Boyolangu dengan ini memberikan rekomendasi kepada:
        </Text>

        <View style={styles.listContainer}>
          <View style={styles.listItem}>
            <Text style={styles.label}>Nama</Text>
            <Text style={styles.separator}>:</Text>
            <Text style={styles.value}>{data.namaSiswa}</Text>
          </View>
          <View style={styles.listItem}>
            <Text style={styles.label}>NISN</Text>
            <Text style={styles.separator}>:</Text>
            <Text style={styles.value}>{data.nisn}</Text>
          </View>
          <View style={styles.listItem}>
            <Text style={styles.label}>Kelas</Text>
            <Text style={styles.separator}>:</Text>
            <Text style={styles.value}>{data.kelas}</Text>
          </View>
        </View>

        <Text style={styles.paragraph}>
          Untuk mengikuti kegiatan {data.kegiatan} yang diselenggarakan oleh {data.penyelenggara} pada:
        </Text>

        <View style={styles.listContainer}>
          <View style={styles.listItem}>
            <Text style={styles.label}>Waktu</Text>
            <Text style={styles.separator}>:</Text>
            <Text style={styles.value}>{data.waktuKegiatan}</Text>
          </View>
          <View style={styles.listItem}>
            <Text style={styles.label}>Tempat</Text>
            <Text style={styles.separator}>:</Text>
            <Text style={styles.value}>{data.tempatKegiatan}</Text>
          </View>
        </View>

        <Text style={styles.paragraph}>
          Demikian surat rekomendasi ini diberikan untuk dapat dipergunakan sebagaimana mestinya. Atas perhatian dan kerjasamanya kami ucapkan terima kasih.
        </Text>
      </View>

      <View style={styles.footer} wrap={false}>
        <View style={styles.signatureBlock}>
          <Text>Contoh, {data.tanggalSurat}</Text>
          <Text>{data.jabatanPenandatangan},</Text>
          {data.tandaTangan ? (
            <Image src={data.tandaTangan} style={styles.signatureImage} />
          ) : (
            <View style={styles.signatureSpace} />
          )}
          <Text style={styles.signerName}>{data.namaPenandatangan}</Text>
          {data.nipPenandatangan && (
            <Text style={styles.signerDetail}>NIP. {data.nipPenandatangan}</Text>
          )}
        </View>
      </View>
    </Page>
  </Document>
);

export const DispenPDF = ({ data }: { data: DispenData }) => (
  <Document title={`Surat Dispensasi - ${data.students[0]?.namaSiswa || 'Multi'}`}>
    <Page size="A4" style={styles.page}>
      <View style={styles.header}>
        <Text style={styles.kopTitle}>PEMERINTAH KABUPATEN TULUNGAGUNG</Text>
        <Text style={styles.kopTitle}>DINAS PENDIDIKAN DAN KEBUDAYAAN KABUPATEN TULUNGAGUNG</Text>
        <Text style={styles.kopTitle}>SMKN 1 BOYOLANGU</Text>
        <Text style={styles.kopSubtitle}>Jl. Ki Mangun Sarkoro No.VI/3, Dusun Talun, Beji, Kec. Boyolangu, Kabupaten Tulungagung, Jawa Timur 66233</Text>
        <Text style={styles.kopSubtitle}>Telepon: (021) 1234567, Website: smkn1boyolangu.sch.id</Text>
      </View>

      <View style={styles.titleContainer}>
        <Text style={styles.title}>SURAT DISPENSASI</Text>
        <Text style={styles.nomorSurat}>Nomor: {data.nomorSurat}</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.paragraph}>
          Yang bertanda tangan di bawah ini, {data.jabatanPenandatangan} SMKN 1 Boyolangu dengan ini memberikan dispensasi kepada:
        </Text>

        <View style={styles.table}>
          <View style={styles.tableRow}>
            <View style={styles.tableColHeader}>
              <Text style={styles.tableCellHeader}>Nama Siswa</Text>
            </View>
            <View style={styles.tableColHeader}>
              <Text style={styles.tableCellHeader}>NISN</Text>
            </View>
            <View style={styles.tableColHeader}>
              <Text style={styles.tableCellHeader}>Kelas</Text>
            </View>
          </View>
          {data.students.map((student, index) => (
            <View style={styles.tableRow} key={index}>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{student.namaSiswa}</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{student.nisn}</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{student.kelas}</Text>
              </View>
            </View>
          ))}
        </View>

        <Text style={styles.paragraph}>
          Untuk tidak mengikuti kegiatan belajar mengajar karena terpilih sebagai peserta kegiatan {data.kegiatan} yang diselenggarakan oleh {data.penyelenggara} pada:
        </Text>

        <View style={styles.listContainer}>
          <View style={styles.listItem}>
            <Text style={styles.label}>Tanggal</Text>
            <Text style={styles.separator}>:</Text>
            <Text style={styles.value}>{data.tanggalMulai} s.d. {data.tanggalSelesai}</Text>
          </View>
          <View style={styles.listItem}>
            <Text style={styles.label}>Tempat</Text>
            <Text style={styles.separator}>:</Text>
            <Text style={styles.value}>{data.tempatKegiatan}</Text>
          </View>
        </View>

        <Text style={styles.paragraph}>
          Demikian surat dispensasi ini diberikan untuk dapat dipergunakan sebagaimana mestinya. Atas perhatian dan kerjasamanya kami ucapkan terima kasih.
        </Text>
      </View>

      <View style={styles.footer} wrap={false}>
        <View style={styles.signatureBlock}>
          <Text>Contoh, {data.tanggalSurat}</Text>
          <Text>{data.jabatanPenandatangan},</Text>
          {data.tandaTangan ? (
            <Image src={data.tandaTangan} style={styles.signatureImage} />
          ) : (
            <View style={styles.signatureSpace} />
          )}
          <Text style={styles.signerName}>{data.namaPenandatangan}</Text>
          {data.nipPenandatangan && (
            <Text style={styles.signerDetail}>NIP. {data.nipPenandatangan}</Text>
          )}
        </View>
      </View>
    </Page>
  </Document>
);