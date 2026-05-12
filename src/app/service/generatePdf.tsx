import { Document, Page, Text, View, StyleSheet, Image } from '@react-pdf/renderer';

// ============================================================================
// Constants
// ============================================================================

const SCHOOL_NAME = 'SMKN 1 BOYOLANGU';
const SCHOOL_LOGO = '/logo2.png';
const KOP_LINES = {
  line1: 'PEMERINTAH KABUPATEN TULUNGAGUNG',
  line2: 'DINAS PENDIDIKAN DAN KEBUDAYAAN KAB.TULUNGAGUNG',
  line3: SCHOOL_NAME,
  alamat:
    'Jl. Ki Mangun Sarkoro No.VI/3, Dusun Talun, Beji, Kec. Boyolangu, Kabupaten Tulungagung, Jawa Timur 66233',
  kontak: 'Telepon: (021) 1234567, Website: smkn1boyolangu.sch.id',
};

// ============================================================================
// Styles
// ============================================================================

const styles = StyleSheet.create({
  // -- Page --
  page: {
    padding: 40,
    fontFamily: 'Helvetica',
    fontSize: 11,
    lineHeight: 1.5,
    color: '#000',
  },

  // -- Kop Surat (Header) --
  // ============================================================================
  // Header Styles
  // ============================================================================

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: '#000',
    paddingBottom: 12,
    marginBottom: 20,
  },

  logoContainer: {
    width: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },

  logo: {
    width: 65,
    height: 65,
  },

  headerCenter: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },

  spacer: {
    width: 80,
  },

  kopLine1: {
    fontSize: 12,
    fontWeight: 'bold',
  },

  kopLine2: {
    fontSize: 12,
    fontWeight: 'bold',
  },

  kopLine3: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 2,
    marginBottom: 4,
  },

  kopAlamat: {
    fontSize: 9,
    textAlign: 'center',
    lineHeight: 1.4,
  },

  kopKontak: {
    fontSize: 9,
    textAlign: 'center',
  },

  // -- Judul Surat --
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

  // -- Isi Surat --
  content: {
    marginTop: 10,
  },
  paragraph: {
    marginBottom: 12,
    textAlign: 'justify',
  },

  // -- List / Detail Fields --
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

  // -- Tanda Tangan --
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
  signatureImage: {
    width: 100,
    height: 60,
    marginVertical: 5,
    alignSelf: 'center',
  },
  signerName: {
    fontWeight: 'bold',
    textDecoration: 'underline',
  },
  signerDetail: {
    fontSize: 11,
    marginTop: 2,
  },

  // -- Tabel (Dispensasi) --
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

// ============================================================================
// Shared Interfaces
// ============================================================================

/** Data penandatangan yang dipakai di semua jenis surat */
interface SignerData {
  tanggalSurat: string;
  namaPenandatangan: string;
  jabatanPenandatangan: string;
  nipPenandatangan?: string;
  tandaTangan?: string;
}

export interface RekomData extends SignerData {
  nomorSurat: string;
  namaSiswa: string;
  nisn: string;
  kelas: string;
  kegiatan: string;
  penyelenggara: string;
  waktuKegiatan: string;
  tempatKegiatan: string;
}

export interface DispenData extends SignerData {
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
}

// ============================================================================
// Reusable Sub-Components
// ============================================================================

/** Kop surat (header) dengan logo dan identitas sekolah */
const KopSurat = () => (
  <View style={styles.header}>

    {/* Logo */}
    <View style={styles.logoContainer}>
      <Image src={SCHOOL_LOGO} style={styles.logo} />
    </View>

    {/* Center Text */}
    <View style={styles.headerCenter}>
      <Text style={styles.kopLine1}>
        PEMERINTAH KABUPATEN TULUNGAGUNG
      </Text>

      <Text style={styles.kopLine2}>
        DINAS PENDIDIKAN DAN KEBUDAYAAN
      </Text>

      <Text style={styles.kopLine3}>
        SMKN 1 BOYOLANGU
      </Text>

      <Text style={styles.kopAlamat}>
        Jl. Ki Mangun Sarkoro No.VI/3, Dusun Talun, Beji,
        Kec. Boyolangu, Kabupaten Tulungagung,
        Jawa Timur 66233
      </Text>

      <Text style={styles.kopKontak}>
        Website: smkn1boyolangu.sch.id
      </Text>
    </View>

    {/* Spacer kanan agar center benar-benar simetris */}
    <View style={styles.spacer} />
  </View>
);

/** Judul surat beserta nomor */
const SuratTitle = ({ jenis, nomor }: { jenis: string; nomor: string }) => (
  <View style={styles.titleContainer}>
    <Text style={styles.title}>{jenis}</Text>
    <Text style={styles.nomorSurat}>Nomor: {nomor}</Text>
  </View>
);

/** Baris detail label : value */
const DetailItem = ({ label, value }: { label: string; value: string }) => (
  <View style={styles.listItem}>
    <Text style={styles.label}>{label}</Text>
    <Text style={styles.separator}>:</Text>
    <Text style={styles.value}>{value}</Text>
  </View>
);

/** Blok tanda tangan */
const TandaTanganBlock = ({ data }: { data: SignerData }) => (
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
);

// ============================================================================
// PDF Documents
// ============================================================================

/** Surat Rekomendasi */
export const RekomPDF = ({ data }: { data: RekomData }) => (
  <Document title={`Surat Rekomendasi - ${data.namaSiswa}`}>
    <Page size="A4" style={styles.page}>
      <KopSurat />
      <SuratTitle jenis="SURAT REKOMENDASI" nomor={data.nomorSurat} />

      <View style={styles.content}>
        <Text style={styles.paragraph}>
          Yang bertanda tangan di bawah ini, {data.jabatanPenandatangan}{' '}
          {SCHOOL_NAME} dengan ini memberikan rekomendasi kepada:
        </Text>

        <View style={styles.listContainer}>
          <DetailItem label="Nama" value={data.namaSiswa} />
          <DetailItem label="NISN" value={data.nisn} />
          <DetailItem label="Kelas" value={data.kelas} />
        </View>

        <Text style={styles.paragraph}>
          Untuk mengikuti kegiatan {data.kegiatan} yang diselenggarakan oleh{' '}
          {data.penyelenggara} pada:
        </Text>

        <View style={styles.listContainer}>
          <DetailItem label="Waktu" value={data.waktuKegiatan} />
          <DetailItem label="Tempat" value={data.tempatKegiatan} />
        </View>

        <Text style={styles.paragraph}>
          Demikian surat rekomendasi ini diberikan untuk dapat dipergunakan
          sebagaimana mestinya. Atas perhatian dan kerjasamanya kami ucapkan
          terima kasih.
        </Text>
      </View>

      <TandaTanganBlock data={data} />
    </Page>
  </Document>
);

/** Surat Dispensasi */
export const DispenPDF = ({ data }: { data: DispenData }) => (
  <Document
    title={`Surat Dispensasi - ${data.students[0]?.namaSiswa || 'Multi'}`}
  >
    <Page size="A4" style={styles.page}>
      <KopSurat />
      <SuratTitle jenis="SURAT DISPENSASI" nomor={data.nomorSurat} />

      <View style={styles.content}>
        <Text style={styles.paragraph}>
          Yang bertanda tangan di bawah ini, {data.jabatanPenandatangan}{' '}
          {SCHOOL_NAME} dengan ini memberikan dispensasi kepada:
        </Text>

        {/* Tabel Daftar Siswa */}
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
          Untuk tidak mengikuti kegiatan belajar mengajar karena terpilih
          sebagai peserta kegiatan {data.kegiatan} yang diselenggarakan oleh{' '}
          {data.penyelenggara} pada:
        </Text>

        <View style={styles.listContainer}>
          <DetailItem
            label="Tanggal"
            value={`${data.tanggalMulai} s.d. ${data.tanggalSelesai}`}
          />
          <DetailItem label="Tempat" value={data.tempatKegiatan} />
        </View>

        <Text style={styles.paragraph}>
          Demikian surat dispensasi ini diberikan untuk dapat dipergunakan
          sebagaimana mestinya. Atas perhatian dan kerjasamanya kami ucapkan
          terima kasih.
        </Text>
      </View>

      <TandaTanganBlock data={data} />
    </Page>
  </Document>
);